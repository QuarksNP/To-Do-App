import styles from './AddTodo.module.css'

export default function AddTodo({captureTodo}) {

    return(
        <>
            <div className={styles.circle}></div>
            <input className={`dark:text-VeryLightGray ${styles.createTodo}`}
                    type="text" 
                    placeholder="Add a task..."
                    onKeyDown={event => captureTodo(event)}
            />
        </>
    )
}