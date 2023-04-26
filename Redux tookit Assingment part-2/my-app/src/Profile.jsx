import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateName } from './reducer/creatAction';

const Profile = () => {
  const {name, age, roll} = useSelector(state=>state)
  const dispatch = useDispatch();


  const handelUpdateAge = (age) =>{
    dispatch({type : "UPDATE_AGE", payload : age})
  }

  const handelUpdateName = (name) =>{
    dispatch({type : updateName, payload : name})
  }

  return (
    <div>
      <p>Name is {name}</p>
      <p>Age is {age}</p>
      <p>Roll is {roll}</p>
      <button onClick={()=>handelUpdateAge(40)}>Update Age</button>
      <button onClick={()=>handelUpdateName("Raj name to suna hoga")}>Update Name</button>
    </div>
  )
}

export default Profile