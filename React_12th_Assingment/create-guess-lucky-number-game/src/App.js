import { useRef } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [luckyNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState(0);
  const [count, setCount] = useState(0);
  const inputRef = useRef()

  const handelClicking = () =>{
    setCount(count + 1);
    if(guess < luckyNumber){
      alert("you guessed a smaller number.")
    }else if(guess > luckyNumber){
      alert("you guessed a bigger number .")
    }else{
      alert(`congratulations you guessed the right number in ${count + 1} attempts`)
      setCount(0)
    }
    setGuess(0)
    inputRef.current.focus()
  }

  return (
    <div className="App">
      <input ref = {inputRef} type="text" value={guess} onChange = {e=>setGuess(parseInt(e.target.value))}/>
      <button onClick={handelClicking}>Match Number</button>
    </div>
  );
}

export default App;
