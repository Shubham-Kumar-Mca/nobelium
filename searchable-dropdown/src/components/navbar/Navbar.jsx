import React, { useEffect, useState } from 'react'
import { products } from '../../data';
import { GoSearch } from "react-icons/go"
import "./navbar.css"

const Navbar = ({setSearchTitle}) => {
    const [text, setText] = useState("");
    const [filterData, setFilterData] = useState([])

    
    const handelSearchText = () => {
        setSearchTitle(text)
        setText("")
    }

    const handelClicking = (title) => {
        setText(title);
        // setFilterData(null)
    }

    useEffect(()=>{
        let filteredData = products.filter(product => product.title.toLowerCase().includes(text.toLowerCase()));
        setFilterData(filteredData)
    },[text])
    return (
        <div className='navbar__container'>
            <div className='search__wrapper'>
                <div className='searchBox'>
                    <input type="text" value={text} placeholder='Search By Product Name' onChange={(e) => setText(e.target.value)} />
                    <button onClick={handelSearchText}><GoSearch /></button>
                </div>
            </div>

            {
                text.length > 0 ?
                    <div className='SearchData' style={{ marginTop: "1.5rem" }}>
                        {filterData && filterData.map((searchProductData, index) => (
                            <div key={index} className='singleSearchProductData' onClick={() => handelClicking(searchProductData.title)}>
                                <img src={searchProductData.thumbnail} alt="" width="20px" height="20px" />
                                <p>{searchProductData.title}</p>
                            </div>
                        ))}
                    </div>
                    : null
            }
        </div>
    )
}

export default Navbar