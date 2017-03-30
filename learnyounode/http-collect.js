const http = require('http');

const url = process.argv[2];
http.get(url, (res) => {
  let num = 0;
  let msg = '';
  res.setEncoding('utf8');
  res.on('data', (str) => {
    num += str.length;
    msg += str;
  });
  res.on('error', console.error);
  res.on('end', () => {
    console.log(num);
    console.log(msg);
  });
});
