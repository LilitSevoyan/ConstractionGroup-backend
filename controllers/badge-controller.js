const badgeService = require("../services/badge-service")

class badgeController {
    async getAllBadgeType(req, res) {
        try {
            const {badge} = req.params
            let forSale = await badgeService.getAllBadgeType(badge)
            res.json(forSale)
        } catch(error) {
            res.status(500).json({err:error})
        }
    }

    async getBadgeTypeCount(req, res) {
        try {
            let count = await badgeService.getBadgeTypeCount()
            res.json(count)
        } catch(error) {
            res.status(500).json({err:error})
        }
    }

    async getReservedCount(req, res) {
        try {
            let reservedCount = await badgeService.getReservedCount()
            res.json(reservedCount)
        } catch(error) {
            res.status(500).json({err:error})
        }
    }
}

module.exports = new badgeController()