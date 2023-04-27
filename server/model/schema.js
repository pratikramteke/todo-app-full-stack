import mongoose from "mongoose"

const todo = mongoose.Schema({
  todo: String,
})

export default mongoose.model("User", todo)
