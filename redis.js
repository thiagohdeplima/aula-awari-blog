const redis = require("redis")

const client = redis.createClient({
    url: process.env.REDIS_URL
})

client.connect()

module.exports = client
