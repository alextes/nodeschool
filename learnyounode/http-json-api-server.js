const http = require('http');
const parse = require('querystring').parse;
const url = require('url');

function getTime(iso) {
  const now = new Date(iso);
  return {
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
  };
}

function getUnixTime(iso) {
  return { unixtime: Date.parse(iso) };
}

const server = http.createServer((req, res) => {
  const reqURL = url.parse(req.url);
  const path = reqURL.pathname;
  const { iso } = parse(reqURL.query);

  if (path === '/api/parsetime') {
    const timeObj = getTime(iso);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(timeObj));
    return;
  }

  if (path === '/api/unixtime') {
    const timeObj = getUnixTime(iso);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(timeObj));
    return;
  }

  res.statusCode = 500;
  res.end();
});

server.listen(process.argv[2]);
