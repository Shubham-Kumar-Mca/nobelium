import React from 'react'
import "./LiveDataShow.css"
const LiveDataShow = ({userInfo}) => {
  return (
    <div className='LiveDataShow'>
        <h2>
            &#123;
            <p>First Name : {userInfo.firstName &&userInfo.firstName} ,</p>
            <p>Last Name : {userInfo.lastName && userInfo.lastName} ,</p>
            <p>Email  : {userInfo.email && userInfo.email} ,</p>
            <p>Password : {userInfo.password && userInfo.password} ,</p>
            <p>Confirm Password : {userInfo.confirmPassword && userInfo.confirmPassword}</p>
            &#125;
        </h2>
    </div>
  )
}

export default LiveDataShow