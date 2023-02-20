const express = require('express')
const router = express.Router()
const subscribeController = require("../controllers/subscribe-controller")

router.get("/", subscribeController.getAll)
router.post("/", subscribeController.create)

module.exports = router

