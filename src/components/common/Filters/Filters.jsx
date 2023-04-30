import styles from './Filters.module.css'

export default function Filters(){
    return (
        <div className={styles.filtersContainer}>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    )
}