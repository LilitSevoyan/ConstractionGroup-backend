const floorService = require("../services/floor-service")

class floorController {
    async getFloorHouses(req, res) {
        try {
            const {floor} = req.params
            let houses = await floorService.getFloorHouses(floor)
            res.json(houses)
        } catch(error) {
            res.status(500).json({err:error})
        }
    } 

    async getFloorHousesForsale(req, res) {
        try {
            const {floor} = req.params
            let housesForsale = await floorService.getFloorHousesForsale(floor)
            res.json(housesForsale)
        } catch(error) {
            res.status(500).json({err:error})
        }
    }

    async getHousesByRoomsCount(req, res) {
        try {
            const {count} = req.params
            let room = await floorService.getHousesByRoomsCount(count)
            res.json(room)
        } catch(err) {
            res.status(500).json({err:err})
        }
    }
}

module.exports = new floorController()