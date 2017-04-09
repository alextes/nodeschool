const moment = require('moment');
const net = require('net');

const server = net.createServer((socket) => {
  const timeString = moment().format('YYYY-MM-DD HH:mm');
  socket.end(`${timeString}\n`);
});

server.listen(process.argv[2]);
