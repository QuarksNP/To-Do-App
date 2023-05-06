import { useState } from "react";

const useCreateTodo = () => {
    const [todo, setTodo] = useState([]);
    const [lastID, setLastID] = useState(0)
    
    const addTodo = (inputTodo) => {
       
        if(event.key.toLowerCase() === "enter" ){
            event.preventDefault();
            setTodo([...todo, {id:lastID + 1, task:inputTodo.current.value, completed:false}]);
            setLastID(lastID + 1);
            inputTodo.current.value = "";
        }
    }

    return [todo, addTodo];
}

export default useCreateTodo;