const express = require('express');
const router = express.Router();

const controller = require("../controllers/posts")

router.get("/", controller.Get)
router.post("/", controller.Post)

router.get("/:id", controller.GetById)

module.exports = router
