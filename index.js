const express = require("express");
const server = express();

const knex = require("./knex")
const articleRouter = require("./routes/article")

server.use(express.json());
server.use("/articles", articleRouter);

server.listen(3000);
