// the connect function
const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host : '165.227.47.243',
    port : 50541
  })

  // set data encoding
  conn.setEncoding('utf-8');

  conn.on("data", (data) => {
    // code that does something when some data is sent
    console.log(data);
  });

  return conn;
}

module.exports = connect;