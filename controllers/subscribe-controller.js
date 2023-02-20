const subscribeService = require("../services/subscribe-service")

class subscribeController {
    async getAll(req, res) {
        try {
            let subscribe = await subscribeService.getAll()
            res.json(subscribe)
        }
        catch(err) {
            res.json({errMessage:err})
        }
    }

    async create(req, res) {
        try {
            const {email} = req.body
            const subscribe = await subscribeService.create(email)
            res.status(201).json({subscribe})
        } catch (error) {
            res.status(500).json({err:error})
        }
    }
}

module.exports = new subscribeController()