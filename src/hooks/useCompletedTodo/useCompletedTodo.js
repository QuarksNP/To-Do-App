import { useState } from "react"

const useCompletedTodo = (todos) => {

    const [completedTodo, setCompletedTodo] = useState(false)

    function checkedTodo( event, ID ){

        let checked = event.target.checked

        const findTodo = todos.findIndex(todo => todo.id === ID)
        todos[findTodo].completed = checked
        
        setCompletedTodo(todos[findTodo].completed)
    }


    return [completedTodo, checkedTodo]
}

export default useCompletedTodo