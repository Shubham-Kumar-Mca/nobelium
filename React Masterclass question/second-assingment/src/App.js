import { useState } from 'react';
import './App.css';
import Table from './Components/Table';

function App() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [logs, setLogs] = useState([]);

  const handleMouseOver = () => {
    setIsMouseOver(true);
    const now = new Date().toLocaleString();
    setLogs([...logs, { time: now, eventName: 'Time In' }]);
  }

  const handleMouseOut = () => {
    setIsMouseOver(false);
    const now = new Date().toLocaleString();
    setLogs([...logs, { time: now, eventName: 'Time Out' }]);
  }
  return (
    <div className="App">
      <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Hello World</h1>
      <h2>This is a React App</h2>
      <div>
        {isMouseOver ? <p>Mouse Over</p> : <p>Mouse Out</p>}
        <Table data={logs} />
      </div>
    </div>
  );
}

export default App;
