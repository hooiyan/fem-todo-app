import { useState } from "react"
import Checkbox from "./Checkbox"
import {
  StyledTodoListItem,
  StyledTodoContent,
  StyledCrossIcon,
} from "../styles/StyledTodoListItem"
import IconCross from "../images/icon-cross.svg"

export default function TodoListItem({ todo, isChecked, isDeleted }) {
  const [isCheckedState, setIsCheckedState] = useState(isChecked)

  const checkTodo = () => {
    setIsCheckedState(!isCheckedState)
  }

  const deleteTodo = () => {
    console.log("Deleted")
  }

  return (
    <StyledTodoListItem isChecked={isChecked}>
      <Checkbox checkTodo={checkTodo} isChecked={isChecked} />
      {/* If a todo item is checked by default, apply the checked styles. The checked styles should be controlled by isCheckedState */}
      <StyledTodoContent isChecked={isCheckedState}>{todo}</StyledTodoContent>
      <StyledCrossIcon
        onClick={deleteTodo}
        isDeleted={isDeleted}
        src={IconCross}
        alt="cross icon"
      />
    </StyledTodoListItem>
  )
}
