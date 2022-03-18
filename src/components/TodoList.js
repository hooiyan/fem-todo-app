import TodoListItem from "./TodoListItem"
import FilterTodosDesktop from "./FilterTodosDesktop"
import {
  StyledTodoListWrapper,
  StyledTodoList,
  StyledBottom,
} from "../styles/StyledTodoList"

export default function TodoList() {
  return (
    <StyledTodoListWrapper>
      <StyledTodoList>
        <TodoListItem defaultChecked todo="Complete online JavaScript course" />
        <TodoListItem todo="Jog around the park 3x" />
        <TodoListItem todo="10 minutes meditation" />
        <TodoListItem todo="Read for 1 hour" />
        <TodoListItem todo="Pick up groceries" />
        <TodoListItem todo="Complete Todo App on Frontend Mentor" />
      </StyledTodoList>
      <StyledBottom>
        <p className="itemLeft">5 items left</p>
        <FilterTodosDesktop />
        <button className="clearCompleted">Clear Completed</button>
      </StyledBottom>
    </StyledTodoListWrapper>
  )
}
