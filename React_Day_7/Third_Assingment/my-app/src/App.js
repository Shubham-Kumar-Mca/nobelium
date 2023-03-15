
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SingIn from './Components/Singin/SingIn';
import SingUp from './Components/Singup/SingUp';




function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element = {<SingUp />}/>
        <Route path='/login' element = {<SingIn />}/>
      </Routes>
    </>
  );
}

export default App;
