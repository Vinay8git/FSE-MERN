const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const PORT = 3000;

const server = http.createServer(async (req, res) => 
{
    if (req.url === '/' && req.method === 'GET') 
    {
        try 
        {  
            const filePath = path.join(__dirname, 'source.txt');
            const fileContent = await fs.readFile(filePath, 'utf-8');
            console.log("I am Free");
            const newFilePath = path.join(__dirname, 'destination.txt');
            await fs.writeFile(newFilePath, fileContent);

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <html>
                <head>
                   <style>
                        background-color:#black;
                   </style>
                </head>
                <body>
                <h1>Singer</h1>
                <pre>${fileContent}</pre>
                <p>The content has been written to 'destination.txt'</p>
                </body>
                </html>
                `);
        } 
        catch (error) 
        {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error occurred while reading/writing file: ' + error.message);
        }
    } 
    else 
    {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
