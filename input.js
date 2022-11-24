// Handling User Input

let connection;

const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
    connection.write("Say: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
    connection.write("Say: left");
  }
  if (key === 's') {
    connection.write("Move: down");
    connection.write("Say: down")
  }
  if (key === 'd') {
    connection.write("Move: right");
    connection.write("Say: right");
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {handleUserInput,setupInput}