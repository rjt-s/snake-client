// The Snake Game
const net = require('net');
const connect = require('./client');
const {handleUserInput,setupInput} = require("./input");

// setup interface to handle user input from stdin
// establish a connection
const k = connect();
setupInput(k);
console.log("Connecting...");

