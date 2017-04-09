const http = require('http');

let count = 0;
const responses = [];

function maybePrint() {
  if (count === 3) {
    responses.forEach((response) => { console.log(response); });
  }
}

function getIndexed(index, url) {
  http.get(url, (res) => {
    let msg = '';
    res.setEncoding('utf8');
    res.on('data', (str) => {
      msg += str;
    });
    res.on('error', console.error);
    res.on('end', () => {
      count += 1;
      responses[index] = msg;
      maybePrint();
    });
  });
}

getIndexed(0, process.argv[2]);
getIndexed(1, process.argv[3]);
getIndexed(2, process.argv[4]);
