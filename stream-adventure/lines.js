const split = require('split');
const through = require('through2');

let count = 0;
const evenTransformStream = through(function(line, _, next) {
  const pushUpper = (str) => {
    this.push(`${str.toString().toUpperCase()}\n`);
  };

  const pushLower = (str) => {
    this.push(`${str.toString().toLowerCase()}\n`);
  };

  if (count % 2 === 1) {
    pushUpper(line);
  } else {
    pushLower(line);
  }
  count += 1;
  next();
});

process.stdin
  .pipe(split())
  .pipe(evenTransformStream)
  .pipe(process.stdout);
