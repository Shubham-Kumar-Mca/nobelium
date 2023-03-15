import { useState } from 'react';
import './App.css';
import { images } from './data';

function App() {
  const [counter, setCounter] = useState(0);
  const [reverseOrdre, setReverseOrder] = useState(false)
  

  const handelChngaePic = () => {
    const nextCounter = reverseOrdre ? counter - 1 : counter + 1;
    if(nextCounter >= images.length){
      setCounter(images.length - 2);
      setReverseOrder(true)
    }else if(nextCounter <= 0){
      setCounter(0);
      setReverseOrder(false)
    }else{
      setCounter(nextCounter)
    }
  }

  return (
    <div className="slider-container">
      <div>
        {images.map((image, index) => (
          <img className='slideImage' key={index} src={image.url} style = {{ bottom: `${index * 100}%`, transform : `translateY(${counter * 100}%)`}}/>
        ))}
      </div>

      <div className='btn-div'>
        <button onClick={handelChngaePic}>Change Pic</button>
      </div>
    </div>
  );
}

export default App;