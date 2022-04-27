const redis = require("../redis")

GetPostById = function(postId) {
    post = GetPostByIdFromCache(postId)

    console.log(post)

    if(post === undefined) {
        return GetPostByIdFromDatabase(postId)
    }
    
    return post
}

// {} || undefined
GetPostByIdFromCache = function(postId) {
    return undefined
}

GetPostByIdFromDatabase = function(postId) {
    return {
        id: 123,
        title: "Meu post",
        content: "Meu conteudo"
    }
}

module.exports = { GetPostById }
