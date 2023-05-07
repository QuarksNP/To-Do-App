import styles from './NewTodo.module.css'
import { useRef } from 'react'

export default function NewTodo({captureTodo}) {

    return(
        <>
            <div className={styles.circle}></div>
            <input className={`dark:text-VeryLightGray ${styles.createTodo}`}
                    type="text" 
                    placeholder="Add a task..."
                    onKeyDown={e => captureTodo(e.target)}
            />
        </>
    )
}