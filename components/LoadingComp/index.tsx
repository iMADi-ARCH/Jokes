import styles from './loading.module.css'

export default function LoadingComp() {

    const messages = [
        "Cooking dinner",
        "Playing Piano",
        "Obliterating bad jokes",
        "Just Joking"
    ]

    let finalMess = messages[Math.floor(Math.random() * messages.length)]

    return <p className={styles.container}>{finalMess}...
        <span className={styles.loading}></span>
    </p>
}