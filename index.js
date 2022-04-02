var express = require("express");

var server = express();

server.get("/posts", function(request, response) {
    response.send("Hello World\n");
});

server.listen(3000);
