import { useState } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';

function App() {
  const [searchTitle, setSearchTitle] = useState("")
  return (
    <div className="App">
      <Navbar setSearchTitle = {setSearchTitle}/>
      <Dashboard searchTitle = {searchTitle}/>
    </div>
  );
}

export default App;
