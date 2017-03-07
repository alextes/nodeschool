const fs = require('fs');
file = fs.readFileSync(process.argv[2]);
lines = file.toString().split('\n');
numOfLines = lines.length - 1;
console.log(numOfLines);
