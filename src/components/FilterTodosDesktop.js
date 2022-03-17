import sharedStyles from "../styles/FilterTodos.module.css"
import styles from "../styles/FilterTodosDesktop.module.css"

export default function FilterTodosDesktop() {
  return (
    <section className={`${sharedStyles.filterTodosContainer} ${styles.desktop}`}>
      <p className={`${sharedStyles.all} ${sharedStyles.selected} ${sharedStyles.option}`}>All</p>
      <p className={`${sharedStyles.active} ${sharedStyles.option}`}>Active</p>
      <p className={`${sharedStyles.completed} ${sharedStyles.option}`}>Completed</p>
    </section>
  )
}
