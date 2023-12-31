const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/styles.css') {
    const cssPath = path.join(__dirname, './public/styles.css');
    fs.readFile(cssPath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading CSS file:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data);
      }
    });
  } else if (req.url === '/') {
    const htmlPath = path.join(__dirname, './public/index.html');

    fs.readFile(htmlPath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading HTML file:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
});

const port = process.env.PORT || 3006;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
