const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.post('/create', (req, res) => {
  console.log(req.body);
  res.json({data:req.body})
})
app.listen(3000)