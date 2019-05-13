// Download large file
const http = require('https');
const fs = require('fs');

let wsStream = fs.createWriteStream('download/sample.mp4');
let rawData = '';
http.get('https://sample-videos.com/video123/mp4/360/big_buck_bunny_360p_30mb.mp4', res => {
  res.on('data', chunk => {
    console.log(chunk);
    wsStream.write(chunk);
    rawData += chunk;
  });
  res.on('end', () => {
    wsStream.end();
    console.log(`The file has been saved!`);
  });
});
