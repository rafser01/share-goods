require("dotenv").config();
var express = require("express");
var app = express();
var serverPort = process.env.PORT || 3334; // var serverPort = process.env.DEV_PORT_UI || 3333;
const path = require('path');
var http = require("http");
var server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'build')));
app.get("/", function(req, res) {
  console.log("get /");
  res.sendFile(__dirname + "/index.html");
});

server.listen(serverPort, function() {
  console.log("server up and running at %s port", serverPort);
});
