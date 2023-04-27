import { useEffect, useRef, useState } from "react"
import axios from "axios"
let flag=true
let id
function App() {
  const todo = useRef()
  const [data, setData] = useState([])
  function newji(i) {
    id=i
  }

  async function getcases() {
    const res = await axios.get("http://localhost:3000/getTodo")
    setData(res.data.users)
  }

  useEffect(() => {
    getcases()
  }, [])

  async function sendToDB() {
    try {
      if (flag) {
        const res = await axios.post("http://localhost:3000/createTodo", {
          todo: todo.current.value,
        })
      } else {
        
      

        await axios.put(`http://localhost:3000/editTodo/${id}`, {
          todo: todo.current.value,
        })
        flag=true
      }
    

      } catch (error) {
        console.log(error)
      }
    getcases()
  }

  function addTodo(e) {
    e.preventDefault()
    todo.current.value && sendToDB()
    todo.current.value = ""
  }
  return (
    <>
      <h1>Full Stack TODO App</h1>
      <form onSubmit={(e) => addTodo(e)}>
        <input
          className="border border-black"
          type="text"
          placeholder="Enter TODO"
          ref={todo}
        />
        <button className="border border-black ml-3" type="submit">
          Add TODO
        </button>
      </form>
      <ul>
        {data.map((i) => (
          <div key={i._id}>
            <span>{i.todo}</span>
            <button
              className="mx-4 my-1 border border-black border-1"
              onClick={async () => {
                todo.current.value = i.todo
                flag=false
                newji(i._id)
                getcases()
              }}
            >
              Edit
            </button>
            <button
              className="mx-4 my-1 border border-black border-1"
              onClick={async () => {
                await axios.delete(`http://localhost:3000/deleteTodo/${i._id}`)
                getcases()
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </>
  )
}

export default App
