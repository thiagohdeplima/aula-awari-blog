var express = require("express");

var server = express();

server.get("/posts", function(request, response) {
    response.json({message: "Hello World"})
});

server.listen(3000);
