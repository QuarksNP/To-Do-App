import DarkMode from '../common/DarkMode/DarkMode';
import styles from './Header.module.css'

export default function Header(){

    return(
        <header className={styles.header}>
            <h1>TODO</h1>
            <DarkMode />
        </header>
    )
}