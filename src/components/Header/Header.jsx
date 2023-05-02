import LightMode from '../common/LightMode/LightMode';
import styles from './Header.module.css'

export default function Header(){

    return(
        <header className={styles.header}>
            <h1>TODO</h1>
            <LightMode />
        </header>
    )
}