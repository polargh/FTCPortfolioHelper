const express = require('express');
const fs = require('fs');
const app = express();
const port = 8383; // Choose the port you want to run the server on
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());

app.get('/e', (req, res) => {
   // const filePath = __dirname+ "\\b.pdf";
  const filePath = __dirname+ "\\16461 Public Release Worlds Portfolio.pdf"; // Provide the path to your PDF file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error('Error reading PDF:', err);
      res.status(500).send('Error reading PDF');
      return;
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

