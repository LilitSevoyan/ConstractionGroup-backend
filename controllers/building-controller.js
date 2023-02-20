const buildingService = require("../services/building-service")

class buildingController {
    async getAllHouses(req, res) {
        try {
            let allHouses = await buildingService.getAllHouses()
            res.json(allHouses)
        }
        catch(err) {
            res.json({errMessage:err})
        }
    }

    async createHouse(req, res) {
        try {
            const newHouse = await buildingService.createHouse(req.body, req.file)
            res.status(201).json({newHouse})
        } 
        catch (error) {
            res.status(500).json({err:error})
        }
    }

    async getPdf(req, res) {
        try {
            const file = await buildingService.getPdf(req.params.img)
            res.download(file)
        }
        catch (error) {
            res.status(500).json({err:error})
        }
    }

    async getFloorHouses(req, res) {
        try {
            const {floor} = req.params
            let floors = await buildingService.getFloorHouses(floor)
            res.json(floors)
        }
        catch(err) {
            res.json({errMessage:err})
        }
    }

    async getHousesByRoomsCount(req, res) {
        try {
            const {count} = req.params
            let room = await buildingService.getHousesByRoomsCount(count)
            res.json(room)
        } 
        catch(err) {
            res.status(500).json({err:err})
        }
    }

    async getPriceBetween(req, res) {
        try {
            const {min, max} = req.params
            let minPrice = await buildingService.getPriceBetween(min, max)
            res.json(minPrice)
        } 
        catch(err) {
            res.status(500).json({err:err})
        }
    }

    async getFilterByMinPrice(req, res) {
        try {
            const {min} = req.params
            let minPrice = await buildingService.getFilterByMinPrice(min)
            res.json(minPrice)
        }
        catch(err) {
            res.status(500).json({err:err})
        }
    }

    async getFilterByMaxPrice(req, res) {
        try {
            const {price} = req.params
            let maxPrice = await buildingService.getFilterByMaxPrice(price)
            res.json(maxPrice)
        } 
        catch(err) {
            res.status(500).json({err:err})
        }
    }

    async getOne(req, res) {
        try {
            const findId = await buildingService.getOne(req.params.id)
            res.json(findId)
        } 
        catch(error) {
            res.status(500).json({err:error})
        }
    }

    async getAreaBetween(req, res) {
        try {
            const {min, max} = req.params
            let area = await buildingService.getAreaBetween(min, max)
            res.json(area)
        }
        catch(err) {
            res.status(500).json({err:err})
        }

    }

    async getFilterByMinArea(req, res) {
        try {
            const {min} = req.params
            
           res.json(minArea)
        }
        catch(err) {
            res.status(500).json({err:err})
    
        }

    }

    async getFilterByMaxArea(req, res) {
        try {
            const {max} = req.params
            let maxArea = await buildingService.getFilterByMaxArea(max)
            res.json(maxArea)
        }
        catch(err) {
            res.status(500).json({err:err})
        }
    }
}

module.exports = new buildingController()