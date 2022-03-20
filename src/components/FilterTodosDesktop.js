import { StyledFilterTodoDesktop } from "../styles/StyledFilterTodosDesktop"

export default function FilterTodosDesktop({
  showAll,
  showActive,
  showCompleted,
}) {
  return (
    <StyledFilterTodoDesktop>
      <button onClick={showAll} className="all option selected">
        All
      </button>
      <button onClick={showActive} className="active option">
        Active
      </button>
      <button onClick={showCompleted} className="completed option">
        Completed
      </button>
    </StyledFilterTodoDesktop>
  )
}
