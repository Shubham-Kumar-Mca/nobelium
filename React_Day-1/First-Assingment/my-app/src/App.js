import './App.css';

const FirstComponent = () =>{
  return <h1>I am heading one ...from first component</h1>
}

const SecondComponent = () =>{
  return <h2>I am heading two ...from second component</h2>
}

const ThirdComponent = () =>{
  return <h3>I am heading three ...from third component</h3>
}

const Button = () =>{
  return <button>Click Me!!</button>
}

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <Button />    
    </div>
  );
}

export default App;
