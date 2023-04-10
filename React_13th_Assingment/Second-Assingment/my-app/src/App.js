import { Route, Routes } from 'react-router-dom';
import './App.css';
import Input from './Components/InputBox/Input';
import InputList from './Components/InputList/InputList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Input />}/>
        <Route path='/show-all-input' element = {<InputList />}/>
      </Routes>
    </div>
  );
}

export default App;
