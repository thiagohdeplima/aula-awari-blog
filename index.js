var express = require("express");

const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_NAME
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
