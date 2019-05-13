const http = require('http');

let rawData = '';
http.get('http://httpbin.org/json', res => {
  res.on('data', chunk => {
    rawData += chunk;
  });
  res.on('end', () => {
    console.log(rawData);
  });
});

// Request image
// Request html
