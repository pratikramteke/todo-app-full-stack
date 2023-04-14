const mongoose = require('mongoose')

const data=mongoose.Schema({
  name:String
})

export default mongoose.model('User',data)