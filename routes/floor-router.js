const express = require('express')
const router = express.Router()
const floorController = require("../controllers/floor-controller")

router.get("/house/:floor", floorController.getFloorHouses)
router.get("/house/forsale/:floor", floorController.getFloorHousesForsale)
router.get("/rooms/:count",  floorController.getHousesByRoomsCount)

module.exports = router