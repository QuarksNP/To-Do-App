import styles from './CheckTodo.module.css'
import { useRef, useState } from 'react'

export default function CheckTodo({ todo, todoID, handleChange }){

    const inputChecked = useRef(null)
    const [checked, setChecked] = useState(false)

    const handleCheck = () => {
        setChecked(inputChecked.current.checked)
       
    }

    return(
        <>
            <input className={`dark:border-VeryDarkGrayishBlue
                                    dark:text-VeryDarkBlue
                                    ${styles.checkTask}`
                            }
                type="checkbox"
                ref={inputChecked}
                onChange={(event) => handleChange(event, todoID)}
                onClick={handleCheck}
            />

            <label>{checked ? <s>{todo}</s> : todo}</label>
        </>
    )
}