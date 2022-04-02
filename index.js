var express = require("express");

var server = express();

server.get("/posts", function(request, response) {
    response.header("content-type", "application/json");
    response.send('{"message": "Hello World"}');
});

server.listen(3000);
