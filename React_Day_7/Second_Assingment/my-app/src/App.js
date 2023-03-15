import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0)

  const handelInputChanges = (e) =>{
    setText(e.target.value)
  }

  useEffect(()=>{
    if(count < 100){
      setCount(text.length)
    }
  },[text.length, count])

  return (
    <div className="App">
      <textarea placeholder='Type something here..' rows="5" onChange={handelInputChanges}></textarea>
      <p style={{color : count === 100 ? "red" : "#737373"}}>{count} / 100</p>
    </div>
  );
}

export default App;
