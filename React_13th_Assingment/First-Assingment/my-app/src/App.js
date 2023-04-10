import { useRecoilState } from 'recoil';
import './App.css';
import { ChangeColor } from './Recoil/ChangeColor';

function App() {
  const [isColor, setIsColor] = useRecoilState(ChangeColor)
  return (
    <div className="App">
      <h1 style = {{color : isColor ? "red" : "blue"}}>Hi, I change the color on Click the button</h1>
      <button onClick={()=>setIsColor(!isColor)}>Change color</button>
    </div>
  );
}

export default App;
