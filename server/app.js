import express from "express"
import cors from "cors"
import connectToDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

connectToDB()

app.use("/", userRoutes)
export default app
