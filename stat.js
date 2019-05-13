// get file's information

const fs = require('fs');

fs.stat('download/stat.txt', (err, info) => {
  if (err) throw err;
  console.log(info);
});
