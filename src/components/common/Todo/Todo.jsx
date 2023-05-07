import {AiOutlineClose} from 'react-icons/ai'
import CheckTodo from '../CheckTodo/CheckTodo'
import styles from './Todo.module.css'

export default function Todo({ CheckTodos }){

    return(
        <div className={`dark:border-VeryDarkGrayishBlue
                            ${styles.todo}`}>
                                    
            <div className={styles.taskDesc}>
               {CheckTodos}
            </div>
            
            <button 
            className={styles.btnRemove}
            type='button'
            >
                <AiOutlineClose />
            </button>
        </div>
    )
}