import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, reset } from './reduxToolkit/counterSlice';

function App() {
  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h1>Counter: {value}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button disabled={value===0} onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
