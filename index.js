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
    console.log(knex.select().from('posts').first());

    response.json({
        entries: [
            { title: "O Teorema CAP #1", content: "Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor" },
            { title: "O Teorema CAP #2", content: "Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor Lorem ipsum dolor" },
        ]
    });
});

server.post("/posts", function(request, response) {
    console.log(request.json())

    response.json({message: "Hello World 2"});
});

server.listen(3000);
