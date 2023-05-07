import { useState } from "react";

const useCreateTodo = () => {
    const [todos, setTodos] = useState([]);
    const [lastID, setLastID] = useState(0)
    
    const addTodo = (inputTodo) => {
       
        if(event.key.toLowerCase() === "enter" ){
            event.preventDefault();
            setTodos([...todos, {id:lastID + 1, task:inputTodo.target.value, completed:false}]);
            setLastID(lastID + 1);
            inputTodo.target.value = "";
        }
    }

    return [todos, addTodo];
}

export default useCreateTodo;