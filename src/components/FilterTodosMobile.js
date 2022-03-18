import { StyledFilterTodoMobile } from "../styles/StyledFilterTodosMobile"

export default function FilterTodosMobile() {
  return (
    <StyledFilterTodoMobile>
      <button className="all option selected">All</button>
      <button className="active option">Active</button>
      <button className="completed option">Completed</button>
    </StyledFilterTodoMobile>
  )
}
