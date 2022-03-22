import { useRecoilState } from "recoil"

import Checkbox from "./Checkbox"

import {
  StyledTodoListItem,
  StyledTodoContent,
  StyledCrossIcon,
} from "../styles/StyledTodoListItem"
import IconCross from "../images/icon-cross.svg"

import { todoListState } from "../recoil/recoilState"
import { replaceItemAtIndex, removeItemAtIndex } from "../utils"

export default function TodoListItem({ item }) {
  const [todos, setTodos] = useRecoilState(todoListState)
  const index = todos.findIndex(todo => todo === item)

  const checkTodo = () => {
    const newTodos = replaceItemAtIndex(todos, index, {
      ...item,
      isChecked: !item.isChecked,
    })
    setTodos(newTodos)
  }

  const deleteTodo = () => {
    const newTodos = removeItemAtIndex(todos, index)
    setTodos(newTodos)
  }

  return (
    <StyledTodoListItem>
      <Checkbox checkTodo={checkTodo} isChecked={item.isChecked} />
      {/* If a todo item is checked by default, apply the checked styles. The checked styles should be controlled by isChecked */}
      <StyledTodoContent isChecked={item.isChecked}>
        {item.text}
      </StyledTodoContent>
      <StyledCrossIcon onClick={deleteTodo} src={IconCross} alt="cross icon" />
    </StyledTodoListItem>
  )
}
