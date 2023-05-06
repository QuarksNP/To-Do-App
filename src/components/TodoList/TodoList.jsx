import NewTodo from "../common/newTodo/newTodo"
import Todo from "../common/Todo/Todo"
import Filters from "../common/Filters/Filters"
import Info from "../common/Info/Info"
import useCreateTodo from "../../hooks/useCreateTodo/useCreateTodo"
import styles from "./TodoList.module.css"

export default function TodoList(){

    const [newTodo, addTodo] = useCreateTodo()
    console.log(newTodo)
 
    const handleClick = (event) => {
        event.preventDefault();
        let filter = event.target

        if(filter.id === "completed") {
            test4(completedTodos)
        }
    }

    return (
        <form className={styles.form}>
            <fieldset className={`dark:bg-VeryDarkDesaturatedBlue
                                    ${styles.createTodoContainer}`}>

                <NewTodo captureTodo={addTodo} />   

            </fieldset>

            <fieldset className={`dark:bg-VeryDarkDesaturatedBlue
                                    dark:text-VeryLightGray
                                    ${styles.todoListContainer}`}>


            <Todo task={"Hello World"}/>
            <Info items={newTodo.length}/>
            </fieldset>

            <Filters active={handleClick}/>
            
        </form>
    )
}