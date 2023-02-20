const SubscribeModel = require("../models/subscribe")

class subscribeService {
    async getAll() {
        let subscribe = await SubscribeModel.find({})
        return subscribe
    }

    async create(email) {
        const subscribe = await SubscribeModel({email})
        await subscribe.save()
        return subscribe
    }
}

module.exports = new subscribeService()