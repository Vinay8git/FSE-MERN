const http=require('http');
const fs= require('fs');
console.log('Start');
fs.readFile('C:\\Users\\dell\\Desktop\\FSE MERN\\Node.js_Tutorial\\Hello.txt', 'utf-8', (err, data)=>{
    if(err) throw err;
    console.log('File Data:' +data);
});
console.log('End');