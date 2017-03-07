const through = require('through2');

function write(chunk, encoding, next) {
  this.push(chunk.toString().toUpperCase());
  next();
}

const stream = through(write);
process.stdin.pipe(stream).pipe(process.stdout);
