const express = require('express')
const router = express.Router()
const badgeController = require("../controllers/badge-controller")

router.get("/all/:badge", badgeController.getAllBadgeType)
router.get("/count", badgeController.getBadgeTypeCount)
router.get("/reserved", badgeController.getReservedCount)

module.exports = router