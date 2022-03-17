import TodoListItem from "./TodoListItem"
import styles from "../styles/TodoList.module.css"

export default function TodoList() {
  return (
    <section className={styles.todoListContainer}>
      <ul className={styles.todoList}>
        <TodoListItem todo="Complete online JavaScript course" />
        <TodoListItem todo="Jog around the park 3x" />
        <TodoListItem todo="10 minutes meditation" />
        <TodoListItem todo="Read for 1 hour" />
        <TodoListItem todo="Pick up groceries" />
        <TodoListItem todo="Complete Todo App on Frontend Mentor" />
      </ul>
      <div className={styles.bottom}>
        <p className={styles.itemLeft}>5 items left</p>
        <p className={styles.clearCompleted}>Clear Completed</p>
      </div>
    </section>
  )
}
