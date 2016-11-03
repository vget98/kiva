var express = require("express");
var path = require("path");
var http = require("http");

// Initialize Server
var app = express();
var server = http.createServer(app);

// Render static HTML file on load
app.use(express.static(path.join(__dirname + "/../client")));

// Set port to env or local host 8000
var port = process.env.PORT || 8000;

server.listen(port, function() {
  console.log("Listening to port", port);
});

// Export incase want to add extra functionality for fun
module.exports = app;