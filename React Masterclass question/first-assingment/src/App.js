import { useState } from 'react';
import './App.css';
import Table from './Components/Table';

function App() {
  const [number, setNumber] = useState(0);
  const [tableData, setTableData] = useState([]);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    setNumber(randomNumber);
  }

  const updateTable = () => {
    const newRow = { id: tableData.length + 1, value: number };
    setTableData([...tableData, newRow]);
  }

  return (
    <div className="App">
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      <h1>Current Number: {number}</h1>
      <button onClick={updateTable}>Update Table</button>
      {tableData.length > 0 ? <Table data={tableData} /> : null}
    </div>
  );
}

export default App;
