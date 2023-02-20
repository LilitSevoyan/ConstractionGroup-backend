const express = require('express')
const router = express.Router()
const upload = require("../middlewares/multer-middleware")
const buildingController = require("../controllers/building-controller")

router.get("/", buildingController.getAllHouses)
router.post("/", upload.single("poster"), buildingController.createHouse)
router.get('/getPdf/:img', buildingController.getPdf)
router.get("/floor/:floor", buildingController.getFloorHouses)
router.get("/rooms/:count", buildingController.getHousesByRoomsCount)
router.get("/sort/price/:min/:max", buildingController.getPriceBetween)
router.get("/sort/price/:min", buildingController.getFilterByMinPrice)
router.get("/price/sort/max/:price", buildingController.getFilterByMaxPrice)
router.get("/id/:id", buildingController.getOne)
router.get("/area/sort/max/:max", buildingController.getFilterByMaxArea)
router.get("/sort/area/:min", buildingController.getFilterByMinArea)
router.get("/sort/area/:min/:max", buildingController.getAreaBetween)

module.exports = router