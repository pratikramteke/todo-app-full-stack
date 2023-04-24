import express from "express"
import cors from "cors"
import config from "./config/config.js"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(cors())
(async () => {
  try {
    await mongoose.connect(config.MONGODB_URL)
    console.log("DB Connected")
    app.on("error", (err) => {
      console.log("ERROR:", err)
      throw err
    })
    app.listen(config.PORT, () =>
      console.log(`App listening on port ${config.PORT}`)
    )
  } catch (err) {
    console.error("ERROR: ", err)
  }
})()

app.listen(config.PORT, () =>
  console.log(`App listening on port ${config.PORT}`)
)
