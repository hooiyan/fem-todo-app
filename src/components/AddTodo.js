import styles from "../styles/AddTodo.module.css"

export default function AddTodo() {
  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <input className={styles.defaultCheckbox} type="checkbox" checked="checked" />
        <span className={styles.customCheckbox}></span>
      </div>
      <input className={styles.textbox} type="text" placeholder="Create a new todo..." />
    </form>
  )
}
