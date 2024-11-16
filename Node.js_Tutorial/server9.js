const http = require('http');
const dt= require('./date.js');
const ad = require("./arithmatic.js");

const PORT = 5000;

const server = http.createServer((req, res) => {

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h2>Current Date&Time: ${dt.myDate()}</h2>`);
    res.end();
    }

  else if (req.url === '/add' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h2>Addition Of Two Numbers: ${ad.myAdd(10, 20)}</h2>`);
    res.end();
  }
  else if(req.url ==='/sub' && req.method ==='GET'){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h2>Subtraction Of Two Numbers: ${ad.mySub(50, 15)}</h2>`);
    res.end();
  } 
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});