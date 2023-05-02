import Todo from "../common/Task/Todo"
import Filters from "../common/Filters/Filters"
import Info from "../common/Info/Info"
import { useState } from "react"
import styles from "./TodoList.module.css"

export default function TodoList(){

    const [value, setValue] = useState()

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
                <input className={styles.createTodo} type="text" placeholder="Add a task..." />
                <button className={styles.btnCreate}>Add</button>
            </fieldset>

            <fieldset className={`dark:bg-VeryDarkDesaturatedBlue
                                    dark:text-VeryLightGray
                                    ${styles.todoListContainer}`}>
                <Todo task={'Hello world!'} />
                <Todo task={'Hello world!'} />
                <Todo task={'Hello world!'} />
                <Todo task={'Hello world!'} />
                <Todo task={'Hello world!'} />

                <Info items={5} />
            </fieldset>

            <Filters active={handleClick}/>
        </form>
    )
}