import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { pdfjs, Document, Page } from 'react-pdf';
import { v4 as uuidv4 } from 'uuid';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PortSearch = () => {
  const [pdfData, setPdfData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageImages, setPageImages] = useState([]);

  useEffect(() => {
    const fetchPDF = async () => {
      try {
        const response = await axios.get('http://localhost:8383/e', {
          responseType: 'arraybuffer',
        });

        const pdfBuffer = response.data;
        setPdfData(pdfBuffer);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    };

    fetchPDF();
  }, []);

  const convertPageToImage = async (page) => {
    const viewport = page.getViewport({ scale: 1 });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const renderContext = {
      canvasContext: context,
      viewport,
    };

    await page.render(renderContext).promise;

    const imageUrl = canvas.toDataURL('image/jpeg');
    return imageUrl;
  };

  const loadPDF = async () => {
    try {
      const loadingTask = pdfjs.getDocument({ data: pdfData });
      const pdf = await loadingTask.promise;

      const totalNumPages = pdf.numPages;
      setNumPages(totalNumPages);

      const images = [];
      for (let i = 1; i <= totalNumPages; i++) {
        const page = await pdf.getPage(i);
        const imageUrl = await convertPageToImage(page);
        images.push(imageUrl);
      }

      setPageImages(images);
    } catch (error) {
      console.error('Error loading PDF:', error);
    }
  };

  useEffect(() => {
    if (pdfData) {
      loadPDF();
    }
  }, [pdfData]);


  return (
    <div style={{ width: '600px', height: '800px', overflow: 'auto' }}>
      {pageImages.length > 0 ? (
        <>
          <div style={{ width: '100%', height: `${numPages-1 * 100}%` }}>
            {pageImages.map((image, index) => (
              <img
                key={uuidv4()}
                src={image}
                alt={`Page ${index + 1}`}
                style={{ width: '100%', height: 'auto' }}
              />
            ))}
          </div>
        </>
      ) : (
        <div>Loading PDF...</div>
      )}

    </div>
  );
};

export default PortSearch;
