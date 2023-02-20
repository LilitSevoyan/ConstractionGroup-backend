const contactService = require("../services/contact-service")

class contactController {
    async getAll(req, res) {
        try {
            let allMessage = await contactService.getAll()
            res.status(200).json(allMessage)
        }
        catch(err) {
            res.status(500).json({error:err})
        }
    }

    async create(req, res) {
        try {
            let sendMessage = await contactService.create(req.body)
            res.status(201).json({sendMessage})
        }
        catch(err) {
            res.status(500).json({error:err})
        }
    }
}

module.exports = new contactController()