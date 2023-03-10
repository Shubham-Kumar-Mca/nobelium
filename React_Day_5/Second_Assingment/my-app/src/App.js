import './App.css';
import React, {useState} from "react"

function App() {
  const [count, setCount] = useState(0)
  const handelIncrement = () =>{
    setCount(prev=>prev + 1)
  }
  const handelDecrement = () =>{
    if(count > 0){
      setCount(prev=>prev - 1)
    }
  }
  return (
    <div className="App">
      <h2 style={{color: "red"}}>{count}</h2>
      <button onClick={handelIncrement}>Increment</button>
      <button onClick={handelDecrement}>Decrement</button>
    </div>
  );
}

export default App;
