import styles from "../styles/FilterTodosMobile.module.css"

export default function FilterTodosMobile() {
  return (
    <section className={styles.filterTodosContainer}>
      <p className={`${styles.all} ${styles.selected} ${styles.option}`}>All</p>
      <p className={`${styles.active} ${styles.option}`}>Active</p>
      <p className={`${styles.completed} ${styles.option}`}>Completed</p>
    </section>
  )
}
