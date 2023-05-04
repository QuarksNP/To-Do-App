import { useState } from "react";

export const useRemoveTodo = (todos) => {
    const [removeTodo, setRemoveTodo] = useState([]);

   function remove(index){
       setRemoveTodo(todos.splice(index, 1))
       return removeTodo
   }

    return [remove]
}