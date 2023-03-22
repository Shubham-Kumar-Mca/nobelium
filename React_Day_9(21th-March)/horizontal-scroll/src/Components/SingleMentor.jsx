import React from 'react'
import "./SingleMentor.css"

const SingleMentor = ({url,name,des,expi}) => {
  return (
    <div className='singleElementContainer'>
      <img src={url} alt={name} />
      <h3>{name}</h3>
      <p>{des}</p>
      <p>{expi}</p>
    </div>
  )
}

export default SingleMentor