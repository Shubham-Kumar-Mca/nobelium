import React, { useState } from 'react'
import axios from "axios"
import "./searchBar.css"

const SearchBar = ({ setFavourites,favourites }) => {
    const [searchText, setSearchText] = useState("");
    const [packages, setPackages] = useState([]);

    const handelSearchPackage = () => {
        axios.get(`https://registry.npmjs.org/-/v1/search?text=${searchText}&size=10`).then(res => {
            setPackages(res.data.objects);
            setSearchText("")
        })
    }

    const handelAddToFavourite = (packg) => {
        localStorage.setItem("FavouritesPackages", JSON.stringify([...favourites, { ...packg, description: "" }]))
        setFavourites([...favourites, { ...packg, description: "" }])
    }
    return (
        <div className='searchBar'>
            <div>
                <input type="text" placeholder='Search For NPM Package' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button onClick={handelSearchPackage}>Search</button>
            </div>
            <div>
                {
                    packages.map((pckg, index) => (
                        <div className='singlePackage' key={index}>
                            <p>{pckg.package.name}</p>
                            <span>{pckg.package.version}</span>
                            <button onClick={() => handelAddToFavourite(pckg)}>Add to Favourite</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchBar