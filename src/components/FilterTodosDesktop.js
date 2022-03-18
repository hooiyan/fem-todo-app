import { StyledFilterTodoDesktop } from "../styles/StyledFilterTodosDesktop"

export default function FilterTodosDesktop() {
  return (
    <StyledFilterTodoDesktop>
      <p className="all selected option">All</p>
      <p className="active option">Active</p>
      <p className="completed option">Completed</p>
    </StyledFilterTodoDesktop>
  )
}
