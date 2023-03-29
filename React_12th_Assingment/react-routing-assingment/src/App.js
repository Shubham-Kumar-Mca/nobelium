import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/about-page' element = {<About />}/>
        <Route path='/login' element = {<Login />}/>
        <Route path='/signUp' element = {<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
