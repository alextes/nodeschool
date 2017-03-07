const concat = require('concat-stream');

process.stdin.pipe(concat((textBuffer) => {
  const text = textBuffer
    .toString()
    .split('')
    .reverse()
    .join('');
  process.stdout.write(text);
}));
