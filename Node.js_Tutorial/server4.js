const https = require('https'); // Use the https module for https URLs
const fs = require('fs');

// Replace this with the direct image URL
const imageUrl = 'https://unsplash.com/photos/a-lion-walking-across-a-grass-covered-field-NGxJuEBHnSE';

const file = fs.createWriteStream('img.jpg');
https.get(imageUrl, function(response) {
    response.pipe(file);

    file.on('finish', () => {
        file.close();
        console.log('Download completed.');
    });
});
