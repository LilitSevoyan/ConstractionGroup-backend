const dotenv = require("dotenv").config()
const express = require ("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
const RoomRouter = require("./routes/building")
const BadgeRouter = require("./routes/badge")
const SortRouter = require("./routes/sort")
const FloorRouter = require("./routes/floor")
const BookRouter = require("./routes/bookRouter/book")
const Subscribe = require("./routes/SubscribeRouter/subscribe")
const Contact = require("./routes/contactRouter/contact")
app.use(express.json());

app.use('/upload', express.static(path.join(__dirname, 'upload')));
app.use(cors())
const CONNECTION_URL = process.env.MONGOOSE_CONNECTION_URL


app.use("/", RoomRouter)
app.use("/book", BookRouter)
app.use("/badge", BadgeRouter)
app.use("/floor", FloorRouter)
app.use("/sort", SortRouter)
app.use("/subscribe",Subscribe)
app.use("/contact",Contact)

mongoose.connect(
    CONNECTION_URL,
     { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log(err );
        }else{
            console.log("Mongoose is Working!");
        }
    }
 )

 app.listen(8080, () => console.log("server is started"))

