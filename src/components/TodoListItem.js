import Checkbox from "./Checkbox"
import styles from "../styles/TodoListItem.module.css"
import IconCross from "../images/icon-cross.svg"

export default function TodoListItem({ todo, isChecked, isDeleted }) {
  return (
    <li className={styles.todoListItem}>
      <Checkbox />
      <span className={styles.todoContent}>{todo}</span>
      <img className={styles.crossIcon} src={IconCross} alt="cross icon" />
    </li>
  )
}
