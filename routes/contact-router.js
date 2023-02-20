const express = require("express")
const router = express.Router()
const ContactModel = require("../models/contact")
const contactController = require("../controllers/contact-controller")


router.get("/", contactController.getAll)
router.post("/", contactController.create)

module.exports = router