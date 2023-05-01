import styles from './Info.module.css'

export default function Info({ items }){
    return (
        <div className={styles.info}>
            <p>{items} items left</p>
            <button>Clear Completed</button>
        </div>
    )
}