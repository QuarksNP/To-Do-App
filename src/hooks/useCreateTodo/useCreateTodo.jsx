import { useState } from "react";

const useCreateTodo = (todo) => {
    const [newTodo, setNewTodo] = useState([])

    function addTodo(){
        setNewTodo([...newTodo,todo.current.value])
        todo.current.value = ""
    }

    return [newTodo, addTodo]
}

export default useCreateTodo