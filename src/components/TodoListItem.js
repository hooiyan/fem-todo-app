import { useState } from "react"
import Checkbox from "./Checkbox"
import {
  StyledTodoListItem,
  StyledTodoContent,
  StyledCrossIcon,
} from "../styles/StyledTodoListItem"
import IconCross from "../images/icon-cross.svg"

export default function TodoListItem({
  todo,
  defaultChecked,
  isChecked,
  isDeleted,
}) {
  let [isCheckedState, setIsChecked] = useState(false)

  const checkTodo = () => {
    console.log("Checked")
    setIsChecked(!isCheckedState)
  }

  const deleteTodo = () => {
    console.log("Deleted")
  }

  return (
    <StyledTodoListItem>
      <Checkbox
        checkTodo={checkTodo}
        defaultChecked={defaultChecked}
        // isChecked={isCheckedState}
      />
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
