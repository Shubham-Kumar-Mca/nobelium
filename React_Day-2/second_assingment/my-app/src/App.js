import './App.css';
import Button from './Components/Button';
import Heading from './Components/Heading';
import Input from './Components/Input';

function App() {
  return (
    <div className="App">
      <Heading />
      <Input />
      <Button text="Submit"/>
    </div>
  );
}

export default App;
