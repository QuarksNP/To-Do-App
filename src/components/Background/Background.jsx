import dark from '../..//assets/bg-dark.jpg'
import styles from './Background.module.css'

export default function Background(){
   return(
    <div className={styles.backgroundContainer}>
        <img src={dark} alt="background" className={styles.background}/>
    </div>
   )
}