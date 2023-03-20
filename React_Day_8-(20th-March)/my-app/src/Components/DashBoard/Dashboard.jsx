import React from 'react';
import styles from "./DashBoard.module.css";
import { BsPlayCircle } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className={styles.DashBoardContainer}>
      <div className={styles.herosection}>
        <p>totally free</p>
        <h2>Let's bring your team together in onclick</h2>
        <p>We help you to manage all of your Work and daily task in office </p>

        <div className={styles.buttonSection}>
          <button>Get Started</button>
          <BsPlayCircle className={styles.playicon} />
          <p>How to use</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard