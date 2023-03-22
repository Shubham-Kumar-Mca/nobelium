import React from 'react'
import SingleMentor from './Components/SingleMentor';
import { mentors } from './data';
import Slider from "react-slick";
import "./style/slick.css";
import "./style/slickTheme.css";
import "./App.css";



const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <h1>FunctionUp Mentors</h1>
      <div className='cotainer'>
        <Slider {...settings}>
          {mentors.map((ele, index) => (
            <div key={index} className="singleSlide">
              <SingleMentor {...ele} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default App