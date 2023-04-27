import express from "express"
import { home,createTodo,getTodo,editTodo,deleteTodo } from "../controllers/userController.js"

const router = express.Router()

router.get("/", home)
router.post('/createTodo', createTodo)
router.get('/getTodo', getTodo)
router.put('/editTodo/:id',editTodo)
router.delete('/deleteTodo/:id',deleteTodo)


export default router
