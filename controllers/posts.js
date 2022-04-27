const knex = require("../knex")
const model = require("../models/post")

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
    post = model.GetPostById(request.params.id)

    if(post === undefined) {
        response.status(404)
        response.json({message: "The article you requested does not exists"})
    } else {
        response.json(post);
    }
}

module.exports = { Get, Post, GetById };