const BookModel = require("../models/book")

class bookService {
    async getAll() {
        let allBook = await BookModel.find({})
        return allBook
    }
    async create(book) {
        let bookHouse = await new BookModel({...book})
        await bookHouse.save()
        return bookHouse
    }
}

module.exports = new bookService()