import React from 'react'
import "./favourateList.css"

const FavourateList = ({favourites, setFavourites}) => {
  console.log("favourites is", favourites);
  // const [favoura, setFavoura] = useState(favourites);

  const handelDescription = (e, index) => {
    const updatedFavo = [...favourites]
    const {value} = e.target;
    updatedFavo[index].description = value
    localStorage.setItem("FavouritesPackages", JSON.stringify(updatedFavo))
    setFavourites(updatedFavo)
  }

  const handelRemoveFavourite = (index) =>{
    const updatedFavo = [...favourites]
    updatedFavo.splice(index, 1);
    localStorage.setItem("FavouritesPackages", JSON.stringify(updatedFavo))
    setFavourites(updatedFavo)
  }

  return (
    <div className='favContainer'>
      {favourites.length === 0 && <h3>No favourite packages added yet.</h3>}

      <div>
        {
          favourites?.map((pckg, index) => (
            <div className='border-bottom' key={index}>
              <div className='singleFavList' >
                <p>{pckg.package.name}</p>
                <span>{pckg.package.version}</span>
                <button onClick={() => handelRemoveFavourite(index)}>Remove</button>

              </div>
              <div>
                <textarea cols="30" placeholder="Write Description Here..." rows="5" value={pckg.description} onChange={(e)=>handelDescription(e, index)}></textarea>
              </div>
            </div>


          ))
        }
      </div>
    </div>
  )
}

export default FavourateList