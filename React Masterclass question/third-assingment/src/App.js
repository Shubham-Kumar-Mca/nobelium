import { useState } from 'react';
import './App.css';

function App() {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const greetings = ["Hello", "Hi", "Hey", "Good morning", "Good afternoon", "Good evening"];

  const handleClick = () => {
    setCurrentGreeting((currentGreeting + 1) % greetings.length);
  };
  return (
    <div className="App">
      <h1>{greetings[currentGreeting]}</h1>
      <button onClick={handleClick}>Next Greeting</button>
    </div>
  );
}

export default App;
