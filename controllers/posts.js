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

GetById = function(request, response) {
    knex
        .select()
        .from('posts')
        .where("id", request.params.id)
        .then(function(articles) {
            if(articles.length == 0) {
                response.status(404)
                response.json({message: "The article you requested does not exists"})
            }
            else {
                response.json(articles[0]);
            }
        })
}

module.exports = { Get, Post, GetById };