import styles from './Filters.module.css'

export default function Filters({ active }){
    return (
        <fieldset className={`dark:bg-VeryDarkDesaturatedBlue
                                ${styles.filtersContainer}`}>
                                    
            <button className={styles.active} type="button" id="all" onClick={active}>All</button>
            <button className={styles.active} type="button" id="active" onClick={active}>Active</button>
            <button className={styles.active} type="button" id="completed" onClick={active}>Completed</button>
        </fieldset>
    )
}