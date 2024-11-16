const http = require('http');
const dt = require("./date.js");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/datetime' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h2>Current Date and Time: ${dt.myDate()}</h2>`);
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});