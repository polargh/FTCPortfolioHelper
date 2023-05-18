import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { pdfjs, Document, Page } from 'react-pdf';
import { v4 as uuidv4 } from 'uuid';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PortSearch = () => {
  return (
<iframe src="https://drive.google.com/file/d/15DvXqFrqFc_8IbITnohTIXCEjf9uBHIm/preview" width="640" height="480" allow="autoplay"></iframe>  );
}

export default PortSearch;
