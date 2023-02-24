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
            let sendMessage = await contactService.create(req.body, res)
            res.status(201).json({sendMessage, message: req.t("success")})
        }
        catch(err) {
            res.status(500).json({message: err.message})
        }
    }
}

module.exports = new contactController()