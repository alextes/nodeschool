const fs = require('fs');

fs.readFile(process.argv[2], (err, file) => {
  if (err) { console.log(err); return; }
  const lines = file.toString().split('\n');
  const numOfLines = lines.length - 1;
  console.log(numOfLines);
});
