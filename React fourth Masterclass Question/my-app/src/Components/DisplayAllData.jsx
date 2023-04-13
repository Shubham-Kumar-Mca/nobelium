import axios from 'axios';
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';

const DisplayAllData = () => {
    const { state, dispatch } = useContext(AuthContext)
    const { data } = state;

    const handelClicking = (id) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
            dispatch({ type: "SINGLE_DATA", payload: res.data })
        })
    }

    return (
        <div className='DisplayAllData'>
            {
                data?.map((singleData) => (
                    <p key={singleData.id} onClick={() => handelClicking(singleData.id)}>{singleData.title}</p>
                ))
            }
        </div>
    )
}

export default DisplayAllData