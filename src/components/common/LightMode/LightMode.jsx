import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import styles from './LightMode.module.css'
import { useState } from 'react';


export default function LightMode(){
    let [darkMode, setdarkMode] = useState(true)

    const activeDarkMode = () => {

        if(darkMode){
            setdarkMode(false)
            document.body.classList.remove("dark")
        }

        else{
            setdarkMode(true)
            document.body.classList.add("dark")
        }
    }

    return(
        <button className={styles.button} onClick={activeDarkMode}>
            {darkMode ? <BsFillSunFill /> : <BsFillMoonFill /> }
         </button>
    )
}