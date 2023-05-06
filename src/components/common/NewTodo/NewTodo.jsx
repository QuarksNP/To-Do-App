import styles from './NewTodo.module.css'
import { useRef } from 'react'

export default function NewTodo({captureTodo}) {
    const inputTodo = useRef()

    return(
        <>
            <div className={styles.circle}></div>
            <input className={`dark:text-VeryLightGray ${styles.createTodo}`}
                    type="text" 
                    placeholder="Add a task..."
                    ref={inputTodo}
                    onKeyDown={() => captureTodo(inputTodo)}
            />
        </>
    )
}