import styles from './Filters.module.css'

export default function Filters({ active }){
    return (
        <fieldset className={styles.filtersContainer}>
            <button className={styles.active} type="button" id="all" value="all" onClick={active}>All</button>
            <button className={styles.active} type="button" id="active" value="active" onClick={active}>Active</button>
            <button className={styles.active} type="button" id="completed" value="completed" onClick={active}>Completed</button>
        </fieldset>
    )
}