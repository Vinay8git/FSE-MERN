const http = require('http');
const fs = require('fs');

console.log('Start');

http.createServer((req, res) => {
    fs.readFileSync('C:\\Users\\dell\\Desktop\\FSE MERN\\Node.js_Tutorial\\Hello.txt', 'utf-8', (err, data) => {
        if (err) {
            res.end('Error reading file.');
            console.error(err); // Log the error in the console
        } 
        else 
            res.end('File Data: ' + data);
    });
  }).listen(8090, () => {
    console.log('Server started on port 8090');
});

console.log('End');
