import Todo from "../common/Task/Todo"
import Filters from "../common/Filters/Filters"
import styles from "./TodoList.module.css"

export default function TodoList(){
    return (
        <form className={styles.form}>
            <div className={styles.createTodoContainer}>
                <input className={styles.createTodo} type="text" placeholder="Add a task..." />
                <button className={styles.btnCreate}>Add</button>
            </div>

            <div className={styles.todoListContainer}>
                <Todo task={'Hello world!'} />
                <Todo task={'Hello world!'} />
                <Todo task={'Hello world!'} />
                <Todo task={'Hello world!'} />
                <Todo task={'Hello world!'} />
            </div>

            <Filters />
        </form>
    )
}