const knex = require("../knex")

Post = function(request, response) {
    knex("posts")
        .insert(request.body)
        .then(function(id) {
            response.status(201)
            response.json({id: id})
        })
        .catch(function(error) {
            console.log(error);

            response.status(500);
            response.json({error: "Something went wrong"});
        })
};

Get = function(request, response) {
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
};

module.exports = { Get, Post };