import { StyledFilterTodoMobile } from "../styles/StyledFilterTodosMobile"

export default function FilterTodosMobile({
  showAll,
  showActive,
  showCompleted,
}) {
  return (
    <StyledFilterTodoMobile>
      <button onClick={showAll} className="all option selected">
        All
      </button>
      <button onClick={showActive} className="active option">
        Active
      </button>
      <button onClick={showCompleted} className="completed option">
        Completed
      </button>
    </StyledFilterTodoMobile>
  )
}
