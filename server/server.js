import express from "express"
import cors from "cors"
import config from "./config/config.js"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(cors())
// (async () => {
//   try {
//     await mongoose.connect(config.MONGODB_URL)
//     console.log("DB Connected")
//     app.on("error", (err) => {
//       console.log("ERROR:", err)
//       throw err
//     })
//     app.listen(config.PORT, () =>
//       console.log(`App listening on port ${config.PORT}`)
//     )
//   } catch (err) {
//     console.error("ERROR: ", err)
//   }
// })()

mongoose.connect("mongodb://localhost:27017/todo")

mongoose.connection.once("open", function () {
  console.log("MongoDB database connection established successfully")
})

const Cat = mongoose.model("Cat", { name: String })

const kitty = new Cat({ name: "Zildjian" })
kitty.save().then(() => console.log("meow"))

app.listen(config.PORT, () =>
  console.log(`App listening on port ${config.PORT}`)
)
