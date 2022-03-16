import IconMoon from "../images/icon-moon.svg"
import styles from "../styles/AppHeader.module.css"

export default function AppHeader() {
  return (
    <header>
      <span className={styles.todoLogo}>Todo</span>
      <img src={IconMoon} alt="toggle theme color" />
    </header>
  )
}
