const fs = require('fs');

const file = fs.readFileSync(process.argv[2]);
const lines = file.toString().split('\n');
const numOfLines = lines.length - 1;
console.log(numOfLines);
