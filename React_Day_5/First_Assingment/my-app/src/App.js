import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("")
  const [data, setData] = useState([])

  const handelAddText = () =>{
    setData([...data, text])
    setText("")
  }
  return (
    <div className="App">
      <div>
        <input value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handelAddText}>Add</button>
      </div>
      <div>
        {
          data && data.map((ele, i)=>(
            <li key={i}>{ele}</li>
          ))
        }
      </div>

    </div>
  );
}

export default App;
