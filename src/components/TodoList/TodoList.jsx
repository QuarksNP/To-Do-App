import Todo from "../common/Todo/Todo"
import Filters from "../common/Filters/Filters"
import Info from "../common/Info/Info"
import useCreateTodo from "../../hooks/useCreateTodo/useCreateTodo"
import { useRef } from "react"
import styles from "./TodoList.module.css"

export default function TodoList(){

    const todo = useRef()
    const [newTodo, addTodo] = useCreateTodo(todo)   
    
    const handleClick = (event) => {
        event.preventDefault();
        let filter = event.target

        if(filter.id === "all"){
            console.log("AAA")
        }
    }

    return (
        <form className={styles.form}>
            <fieldset className={`dark:bg-VeryDarkDesaturatedBlue
                                    ${styles.createTodoContainer}`}>
                <input className={`dark:text-VeryLightGray ${styles.createTodo}`}
                        type="text" 
                        placeholder="Add a task..."
                        ref={todo}
                         />
                <div className={styles.btnContainer}>
                    <button className={styles.btnCreate}
                            type="button"
                            onClick={addTodo}>Add</button>
                    </div>
            </fieldset>

            <fieldset className={`dark:bg-VeryDarkDesaturatedBlue
                                    dark:text-VeryLightGray
                                    ${styles.todoListContainer}`}>

                {newTodo.map((todos, index) => {
                   return(
                        <Todo key={index} task={todos} />
                   )
                })}               

                {newTodo.length === 0 ? <></> : <Info items={newTodo.length}/>}
            </fieldset>

            {newTodo.length === 0 ? <></> :<Filters active={handleClick}/>}
            
        </form>
    )
}