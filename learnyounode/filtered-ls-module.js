const fs = require('fs');
const path = require('path');

module.exports = (dir, ext, callback) => {
  fs.readdir(dir, (err, files) => {
    if (err) { callback(err, null); return; }
    const matchingFiles = files.filter(file =>
      path.extname(file) === `.${ext}`
    );
    callback(null, matchingFiles);
  });
};
