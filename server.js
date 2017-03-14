/* eslint-disable */
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var server = require('http').createServer(app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/style'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

server.listen(process.env.PORT || 8080);
console.log('Server running successfully on port 8080');
