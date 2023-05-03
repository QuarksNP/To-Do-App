import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import styles from './DarkMode.module.css'
import { useState } from 'react';


export default function DarkMode(){
    const [darkMode, setdarkMode] = useState(false)
    console.log(darkMode)

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