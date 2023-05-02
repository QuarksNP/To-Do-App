import {AiOutlineClose} from 'react-icons/ai'
import styles from './Todo.module.css'

export default function Todo({ task }){
    return(
        <div className={`dark:border-VeryDarkGrayishBlue
                            ${styles.todo}`}>
                                
            <div className={styles.taskDesc}>
                <input className={`dark:border-VeryDarkGrayishBlue
                                    dark:text-VeryDarkBlue
                                    ${styles.checkTask}`
                            }
                type="checkbox"/>
                <label>{task}</label>
            </div>
            
            <button className={styles.btnRemove}>
                <AiOutlineClose />
            </button>
        </div>
    )
}