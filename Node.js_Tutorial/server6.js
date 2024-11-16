const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
      const sourceFilePath = path.join(__dirname, 'source.txt');
      const destinationFilePath = path.join(__dirname, 'destination.txt');
      const logFilePath = path.join(__dirname, 'log.txt');

      const [sourceContent, logContent] = await Promise.all([
        fs.readFile(sourceFilePath, 'utf-8'),
        fs.readFile(logFilePath, 'utf-8')
      ]);

      await fs.writeFile(destinationFilePath, sourceContent);

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <html>
        <body>
          <h1>File Content</h1>
          <pre>${sourceContent}</pre>
          <p>The content has been written to 'destination.txt'</p>
        </body>
        </html>
      `);

      console.log('Log File Content:');
      console.log(logContent);

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});


server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
