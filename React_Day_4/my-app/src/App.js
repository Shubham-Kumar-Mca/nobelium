import './App.css';
import Cart from './Components/Cart';

function App() {
  const User1 = {
    name : "Amit" ,
    image : "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg" ,
    designation : "Graphic Designer" ,
    description : "Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design." 
  }

  const User2 = {
    name : "Ruhi" ,
    image : "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ,
    designation : "Singer" ,
    description : "perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays, and other types of music groups. " 
  }
  
  return (
    <div className="App">
      <Cart {...User1}/>
      <Cart {...User2}/>
    </div>
  );
}

export default App;
