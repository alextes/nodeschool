const request = require('request');

const postRequest = request
  .post('http://localhost:8099/');

process.stdin
  .pipe(postRequest)
  .pipe(process.stdout);
