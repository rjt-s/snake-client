// the connect function
const net = require('net');
const {IP,PORT} = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host : IP,
    port : PORT
  })

  // set data encoding
  conn.setEncoding('utf8');

  // connection successfully started message
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  })

  conn.on("connect", () => {
    conn.write("Name: RJT");
  })

  // // move up at connect
  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // })
  // // move one more
  // setTimeout(() => {
  //   conn.on("connect", () => {
  //     conn.write("Move: up");
  //   })
  // },500)

  // // move with setInterval
  // setInterval(() => {
  //   conn.write("Move: up");
  // },1000)

  conn.on("data", (data) => {
    // code that does something when some data is sent
    console.log(data);
  });

  return conn;
}

module.exports = connect;