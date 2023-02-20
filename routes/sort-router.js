const express = require('express')
const router = express.Router()
const sortController = require("../controllers/sort-controller")

router.get("/priceDecrease", sortController.sortByPriceDecrease)
router.get("/areaDecrease", sortController.sortByAreaDecrease)
router.get("/roomsCountDecrease", sortController.sortByRoomsCountDecrease)
router.get("/priceIncrease", sortController.sortByPriceIncrease)
router.get("/areaIncrease", sortController.sortByAreaIncrease)
router.get("/roomsCountIncrease", sortController.sortByRoomsCountIncrease)

module.exports = router