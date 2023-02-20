const ContactModel = require("../models/contact")

class contactService {
    async getAll() {
        let allMessage = await ContactModel.find({})
        return allMessage
    }

    async create(contact) {
        const sendMessage = await ContactModel({...contact})
        await sendMessage.save()
        return sendMessage
    }
}

module.exports = new contactService()