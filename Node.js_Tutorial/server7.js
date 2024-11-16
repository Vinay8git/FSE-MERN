const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const path = require('path');

const PORT = 3000;

const server = http.createServer(async (req, res) => {

  const parsedUrl = url.parse(req.url, true);
  
  if (parsedUrl.pathname === '/read' && req.method === 'GET') {
    
    const requestedFile = parsedUrl.query.file;

    if (!requestedFile) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Please specify a file name using ?file=filename');
      return;
    }

    try {
      
      const filePath = path.join(__dirname, `${requestedFile}.txt`);

      const fileContent = await fs.readFile(filePath, 'utf-8');

      console.log(`Content of ${requestedFile}.txt:`);
      console.log(fileContent);

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <html>
        <body>
          <h1>File: ${requestedFile}.txt</h1>
          <pre>${fileContent}</pre>
          <p>Check terminal for file content.</p>
        </body>
        </html>
      `);
    } catch (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`File '${requestedFile}.txt' not found or could not be read.`);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
