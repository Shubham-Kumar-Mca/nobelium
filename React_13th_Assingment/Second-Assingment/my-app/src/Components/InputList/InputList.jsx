import React from 'react'
import "./InputList.css"
import { useRecoilValue } from 'recoil'
import { taskListAtom } from '../Recoil/Todo'
import { useNavigate } from 'react-router-dom'
const InputList = () => {
  const todos = useRecoilValue(taskListAtom);
  const navigate = useNavigate()
  return (
    <div className='inputList-container'>
      {
        todos.length === 0 ?<>
        <h2>&#128073; Plaese Insert Some Todos</h2>
        <button onClick={()=>navigate("/")}>Go To Insert Todo</button>
        
        </> :
        <>
          {todos.map((todo,index)=>(
            <li key={index}>&#128073; {todo}</li>
          ))}
          <button onClick={()=>navigate("/")}>Go To Insert Todo</button>
        </>
      }
    </div>
  )
}

export default InputList