import express from  'express'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
import mongoose from 'mongoose'
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Connected!"))

app.get('/', (req, res) => {

  res.status(200).send('hi')
})

app.post('/create', (req, res) => {
  console.log(req.body);
  res.json({ data: req.body, sucess:true })
  // User.create({name:'pratik'})
})
app.listen(3000)