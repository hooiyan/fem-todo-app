import Checkbox from "./Checkbox"
import {
  StyledTodoListItem,
  StyledTodoContent,
  StyledCrossIcon,
} from "../styles/StyledTodoListItem"
import IconCross from "../images/icon-cross.svg"

export default function TodoListItem({ todo, isChecked, isDeleted }) {
  return (
    <StyledTodoListItem>
      <Checkbox />
      <StyledTodoContent>{todo}</StyledTodoContent>
      <StyledCrossIcon src={IconCross} alt="cross icon" />
    </StyledTodoListItem>
  )
}
