import mongoose from "mongoose"
import config from "./config.js"

async function connectToDB() {
  mongoose
    .connect(config.MONGODB_URL)
    .then((conn) => {
      console.log(`Connected to Database`)
    })
    .catch((err) => {
      console.log(err.message)
      process.exit(1)
    })
}

export default connectToDB
