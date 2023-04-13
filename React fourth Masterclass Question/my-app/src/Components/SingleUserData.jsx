import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';

const SingleUserData = () => {
    const { state } = useContext(AuthContext)
    const { singleUserData } = state;
    return (
        <div className='singleuserData'>
            {
                singleUserData && <div>
                    {singleUserData.id && <p><span>Id : </span>{singleUserData.id}</p>}
                    {singleUserData.title && <p><span>Title : </span>{singleUserData.title}</p>}
                    {singleUserData.body && <p><span>Description : </span>{singleUserData.body}</p>}
                </div>
            }
        </div>
    )
}

export default SingleUserData