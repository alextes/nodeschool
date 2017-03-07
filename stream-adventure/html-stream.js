const through = require('through2');
const trumpet = require('trumpet');

const tr = trumpet();

function upperLoud(buffer, _, next) {
  const upperText = buffer
    .toString()
    .toUpperCase();
  this.push(upperText);
  next();
}

const stream = tr.select('.loud').createStream();
stream.pipe(through(upperLoud)).pipe(stream);

process.stdin
  .pipe(tr)
  .pipe(process.stdout);
