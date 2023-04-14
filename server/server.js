import express from  'express'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
import mongoose from 'mongoose'
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Connected!"))


app.post('/create', (req, res) => {
  console.log(req.body);
  res.json({ data: req.body })
  User.create({name:'pratik'})
})
app.listen(3000)