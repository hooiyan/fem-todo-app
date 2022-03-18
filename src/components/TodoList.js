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
        <TodoListItem todo="Complete online JavaScript course" />
        <TodoListItem todo="Jog around the park 3x" />
        <TodoListItem todo="10 minutes meditation" />
        <TodoListItem todo="Read for 1 hour" />
        <TodoListItem todo="Pick up groceries" />
        <TodoListItem todo="Complete Todo App on Frontend Mentor" />
      </StyledTodoList>
      <StyledBottom>
        <p className="itemLeft">5 items left</p>
        <FilterTodosDesktop />
        <p className="clearCompleted">Clear Completed</p>
      </StyledBottom>
    </StyledTodoListWrapper>
  )
}
