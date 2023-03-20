import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";

const Navbar = () => {
    const [check, setCheck] = useState(false)

    return (
        <div className={styles.NavbarContainer}>
            <div className={styles.leftContain}>
                <div className={styles.NavbarGitHubImageContainer}>
                    <img src="https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png" alt="GitHub_Logo" />
                    <h2>Onclick</h2>
                </div>

                <div className={check ? styles.show : styles.NavbarLinks}>
                    <span className={styles.changeColor}>|</span>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Contact</li>
                        <li>About Us</li>
                        <div className={styles.cancelButton} >
                            <ImCancelCircle className={styles.canceCircle} onClick = {()=>setCheck(false)}/>
                        </div>
                    </ul>
                </div>
            </div>

            <div className={styles.SingUpAndLoginButtonContainer}>
                <AiOutlineMenu className={styles.HemburgurMenu} onClick={() => setCheck(true)} />
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar