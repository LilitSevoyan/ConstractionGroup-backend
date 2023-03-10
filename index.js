const dotenv = require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
const RoomRouter = require("./routes/building-router")
const BadgeRouter = require("./routes/badge-router")
const SortRouter = require("./routes/sort-router")
const FloorRouter = require("./routes/floor-router")
const BookRouter = require("./routes/book-router")
const Subscribe = require("./routes/subscribe-router")
const Contact = require("./routes/contact-router")
const i18next = require("i18next")
const Backend = require("i18next-fs-backend")
const middleware = require("i18next-http-middleware")

i18next.use(Backend).use(middleware.LanguageDetector)
    .init({
        fallbackLng: 'en',
        backend: {
            loadPath: './locales/i18n/messages/{{lng}}.json'
        }
    })

app.use(middleware.handle(i18next))
app.use(express.json())
app.use('/upload', express.static(path.join(__dirname, 'upload')))
app.use(cors())

const CONNECTION_URL = process.env.MONGOOSE_CONNECTION_URL

app.use("/building", RoomRouter)
app.use("/book", BookRouter)
app.use("/badge", BadgeRouter)
app.use("/floor", FloorRouter)
app.use("/sort", SortRouter)
app.use("/subscribe", Subscribe)
app.use("/contact", Contact)

mongoose.connect(
    CONNECTION_URL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    },
    (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Mongoose is Working!")
        }
    }
)

app.listen(8080, () => console.log("server is started"))

