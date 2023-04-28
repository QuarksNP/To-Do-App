import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import styles from './Header.module.css'
import { useState } from 'react';

export default function Header(){
    let [darkMode, setdarkMode] = useState(true)
    
    return(
        <header className={styles.header}>
            <h1>TODO</h1>
            <button className={styles.button} onClick={() => {
               darkMode ? setdarkMode(false) : setdarkMode(true)
            }}>
                {darkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
            </button>
        </header>
    )
}