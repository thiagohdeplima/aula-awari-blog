var express = require("express");

const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'database',
        port: 3306,
        user: 'root',
        password: '123456',
        database: 'blog'
    }
});

var server = express();

server.get("/posts", function(request, response) {
    knex
        .select()
        .from('posts')
        .then(function(rows) {
            response.json(rows);
        })
        .catch(function(error) {
            console.log(error);

            response.status(500);
            response.json({error: "Something went wrong"});
        });
});

server.post("/posts", function(request, response) {
    console.log(request.json())

    response.json({message: "Hello World 2"});
});

server.listen(3000);
