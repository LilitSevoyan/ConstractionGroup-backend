const bookService = require("../services/book-service")

class bookController {
    async getAll(req, res) {
        try {
            let allBook = await bookService.getAll()
            res.status(200).json(allBook)
        }
        catch(err) {
            res.status(500).json({errMessage:err})
        }
    }

    async create(req, res) {
        try {
            const BookHouse = await bookService.create(req.body)
            res.status(201).json({BookHouse})
        } catch (error) {
            res.status(500).json({err:error})
        }
    }
}

module.exports = new bookController()