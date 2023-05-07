import NewTodo from "../common/newTodo/newTodo"
import Todo from "../common/Todo/Todo"
import Filters from "../common/Filters/Filters"
import Info from "../common/Info/Info"
import CheckTodo from "../common/CheckTodo/CheckTodo"
import useCreateTodo from "../../hooks/useCreateTodo/useCreateTodo"
import useCompletedTodo from "../../hooks/useCompletedTodo/useCompletedTodo"
import useRemoveTodo from "../../hooks/useRemoveTodo/useRemoveTodo"
import styles from "./TodoList.module.css"

export default function TodoList(){

    const [todos, addTodo] = useCreateTodo()
    const [completedTodo, setCompletedTodo] = useCompletedTodo(todos)
    const [removeTodo, setRemoveTodo] = useRemoveTodo(todos)
 
    const handleClick = (event) => {
        event.preventDefault();
        let filter = event.target

        if(filter.id === "completed") {
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


            {todos.map((todo, index) => {
                return <Todo key={todo.id}
                                CheckTodos={ <CheckTodo todo={todo.task}
                                                        todoID={todo.id} 
                                                        handleChange={setCompletedTodo}
                                                        isComplete={todo.completed}
                                                        
                                                        />}
                        onRemoveTodo={() => setRemoveTodo(index)} 

                    />
            })}
            <Info items={todos.length}/>
            </fieldset>

            <Filters active={handleClick}/>
            
        </form>
    )
}