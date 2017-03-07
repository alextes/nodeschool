const fs = require('fs');
fs.readFile(process.argv[2], (err, file) => {
  if (err) { return console.log(err); }
  lines = file.toString().split('\n');
  numOfLines = lines.length - 1;
  console.log(numOfLines);
});
