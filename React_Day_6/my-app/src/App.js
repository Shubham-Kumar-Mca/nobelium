import React, { useRef, useState } from 'react'
import { GiCancel } from "react-icons/gi";
import "./App.css"

const App = () => {
  const [text, setText] = useState("")
  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(0)

  const handelInputChnage = (e) => {
    setText(e.target.value)
  }

  const handelAdding = () => {
    const newUser = {
      id: new Date(),
      title: text,
      status: false
    }
    setTodos([...todos, newUser]);
    setText("")
    setCount(count + 1)
  }

  const handelDeleting = (id) => {
    todos.forEach(ele => {
      if ((ele.id === id) && ele.status === false) {
        setCount(count - 1)
      }
    })
    const filterData = todos.filter((item) => item.id !== id);
    setTodos(filterData)
  }

  const handelUpdating = (id) => {
    const updatedData = todos.map(item => {
      if (item.id === id) {
        count > 0 && setCount(count - 1)
        return { ...item, status: !item.status }
      } else {
        return item
      }
    })
    setTodos(updatedData)
  }

  return (
    <div className='container'>
      <h1>Pending Task {`(${count})`}</h1>
      <div>
        {todos.map((todo, index) => (
          <div key={index} className='Single-data'>
            {todo.status ? <p> <strike>{todo.title}</strike></p> : <p>{todo.title}</p>}
            <div>
              <button onClick={() => handelUpdating(todo.id)}>{todo.status ? "Completed" : "Not Completed"}</button>
              <GiCancel className='icon' onClick={() => handelDeleting(todo.id)} />
            </div>
          </div>
        ))}
      </div>
      
      <div className='input-part'>
        <input placeholder='Enter Something...' value={text} onChange={handelInputChnage} />
        <button onClick={handelAdding}>Add</button>
      </div>
    </div>
  )
}

export default App