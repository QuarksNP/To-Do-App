import {AiOutlineClose} from 'react-icons/ai'
import { useRef, useState } from 'react'
import styles from './Todo.module.css'

export default function Todo({ task, onRemove }){
    
    const checkTask = useRef()
    const [checked, setChecked] = useState(false)

    const handleCheck  = () => {
        setChecked(checkTask.current.checked)
    }
    
    return(
        <div className={`dark:border-VeryDarkGrayishBlue
                            ${styles.todo}`}>
                                    
            <div className={styles.taskDesc}>
                <input className={`dark:border-VeryDarkGrayishBlue
                                    dark:text-VeryDarkBlue
                                    ${styles.checkTask}`
                            }
                type="checkbox"
                ref={checkTask}
                onChange={handleCheck} />

                <label>{checked ? <s>{task}</s> : task}</label>
            </div>
            
            <button 
            className={styles.btnRemove}
            type='button'
            onClick={onRemove}
            >
                <AiOutlineClose />
            </button>
        </div>
    )
}