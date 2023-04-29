import './App.css';
import SearchBar from './components/searchbar/SearchBar';
import FavourateList from './components/favouratelist/FavourateList';
import { useState } from 'react';

function App() {
  const FavouriteFromLS = JSON.parse(localStorage.getItem("FavouritesPackages")) || []
  const [favourites, setFavourites] = useState(FavouriteFromLS);


  console.log("inside App", favourites);
  return (
    <div className="App">
      <SearchBar setFavourites = {setFavourites} favourites = {favourites}/>
      <FavourateList favourites={favourites} setFavourites={setFavourites}/>
    </div>
  );
}

export default App;
