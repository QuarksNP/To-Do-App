import { useState } from "react";

const useRemoveTodo = (todos) => {
    const [removeTodo, setRemoveTodo] = useState([]);

   function remove(index){
       setRemoveTodo(todos.splice(index, 1))
   }

    return [ removeTodo, remove ]
}

export default useRemoveTodo