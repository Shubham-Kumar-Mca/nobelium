import './App.css';
import React from 'react';

function App() {
  const [name, setName] = React.useState("Amit")

  const handelChangeName = () =>{
    setName(name==="Amit"?"Rajan":"Amit")
  }
  return (
    <div className="App">
      <h2>My name is {name}</h2>
      <button onClick={handelChangeName}>Change Name</button>
    </div>
  );
}

export default App;
