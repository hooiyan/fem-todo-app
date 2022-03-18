import { StyledFilterTodoDesktop } from "../styles/StyledFilterTodosDesktop"

export default function FilterTodosDesktop() {
  return (
    <StyledFilterTodoDesktop>
      <button className="all option selected">All</button>
      <button className="active option">Active</button>
      <button className="completed option">Completed</button>
    </StyledFilterTodoDesktop>
  )
}
