import User from '../model/schema.js'

export function home(req, res) {
  res.send("Hello from Backend")
}

export async function createTodo(req, res) {
  try {
    // Extracting name and email from body
    const { todo } = req.body
    if (!todo) {
      throw new Error("Name are required")
    }

    const user = await User.create({
      todo,
    })

    res.status(201).json({
      success: true,
      message: "task created successfully",
      user,
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}

export async function getTodo (req, res){
  try {
    const users = await User.find()

    res.status(200).json({
      success: true,
      users,
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}

export async function editTodo(req, res) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body)

    res.status(200).json({
      success: true,
      message: "User updated successfully",
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}

export async function deleteTodo(req, res) {
  try {
    const userId = req.params.id
    const user = await User.findByIdAndDelete(userId)

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}
