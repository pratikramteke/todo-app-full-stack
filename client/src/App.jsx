import { useRef, useState } from "react"
import axios from "axios"
function App() {
  const todo = useRef()
  const [data,setData] = useState([{todo:'sf'}])
  async function sendToDB() {
    try {
      const res = await axios.post("http://localhost:3000/create", {
        todo: todo.current.value,
      })
      setData((prev) => {
        return [...prev,{todo:todo.current.value}]
      })
    } catch (error) {
      console.log(error)
    }
  }

  function addTodo(e) {
    e.preventDefault()
    sendToDB()
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
        { data.map(i => <li>{i.todo}</li>)}
      </ul>
    </>
  )
}

export default App
