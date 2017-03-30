const fs = require('fs');
const path = require('path');

const pathToSearch = process.argv[2];
const ext = process.argv[3];

fs.readdir(pathToSearch, (err, files) => {
  if (err) { return console.log(err); }
  files.forEach((file) => {
    if (path.extname(file) === `.${ext}`) {
      console.log(file);
    }
  });
  return undefined;
});
