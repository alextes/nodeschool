const http = require('http');
const through = require('through2');

const PORT = process.argv[2];

function toUpper(buffer, _, next) {
  const upperText = buffer
    .toString()
    .toUpperCase();
  this.push(upperText);
  next();
}

function end(done) {
  done();
}

const server = http.createServer((req, res) => {
  req
    .pipe(through(toUpper, end))
    .pipe(res);
});

server.listen(PORT);
