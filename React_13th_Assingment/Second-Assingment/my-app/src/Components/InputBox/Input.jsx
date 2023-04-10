import React, { useState } from 'react';
import "./Input.css"
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { taskListAtom } from '../Recoil/Todo';

const Input = () => {
  const [todos, setTodos] = useRecoilState(taskListAtom);
  const [text, setText] = useState("");


  const handelClick = () =>{
    setTodos([...todos, text])
    setText("")
  }

  return (
    <div className='input-container'>
      <input type="text" placeholder='Enter Something' value={text} onChange={(e)=>setText(e.target.value)}/>
      <div>
        <button onClick={handelClick}>Add task + </button>
        <button>
          <Link to="/show-all-input">check tasks </Link>
        </button>
      </div>
    </div>
  )
}

export default Input