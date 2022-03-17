import IconMoon from "../images/icon-moon.svg"
import styles from "../styles/AppHeader.module.css"

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <span className={styles.todoText}>Todo</span>
      <img className={styles.themeToggler} src={IconMoon} alt="toggle theme color" />
    </header>
  )
}
