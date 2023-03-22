import React from 'react'
import styles from "./Squre.module.css"

const Squre = ({borderBottom, borderRight, handelClick, value}) => {

  return (
    <div onClick={handelClick} className={`${borderBottom && styles.borderBottom} ${borderRight && styles.borderRight} ${styles.paddingRightLeft}`}>
      <h2>{value}</h2>
    </div>
  )
}

export default Squre