import { StyledFilterTodoMobile } from "../styles/StyledFilterTodosMobile"

export default function FilterTodosMobile() {
  return (
    <StyledFilterTodoMobile>
      <p className="all selected option">All</p>
      <p className="active option">Active</p>
      <p className="completed option">Completed</p>
    </StyledFilterTodoMobile>
  )
}
