import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [tabelDatas, setTableData] = useState([]);

  const handelClicking = (index) =>{
    const filteredData = tabelDatas.filter((_, ind)=>ind !== index)
    setTableData(filteredData)
  }
  console.log(tabelDatas);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      setTableData(res.data)
    })
  }, [])
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            tabelDatas?.map((tabelData, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{tabelData.title}</td>
                <td onClick={()=>handelClicking(index)}>❌</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
