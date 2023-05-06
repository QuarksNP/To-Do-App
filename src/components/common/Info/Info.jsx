import styles from './Info.module.css'

export default function Info({ items }){
    return (
        <div className={styles.info}>
            <h2>{items} items left</h2>
            <button type='button'>Clear Completed</button>
        </div>
    )
}