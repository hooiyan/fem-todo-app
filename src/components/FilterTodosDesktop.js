import { useRecoilState } from "recoil"
import { todoListFilterState } from "../recoil/recoilState"
import { StyledFilterTodoDesktop } from "../styles/StyledFilterTodosDesktop"

export default function FilterTodosDesktop() {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const showAll = () => {
    filter && setFilter("All")
  }

  const showActive = () => {
    filter && setFilter("Uncompleted")
  }

  const showCompleted = () => {
    filter && setFilter("Completed")
  }

  return (
    <StyledFilterTodoDesktop>
      <button onClick={showAll} className="all option selected" value="All">
        All
      </button>
      <button onClick={showActive} className="active option" value="Active">
        Active
      </button>
      <button
        onClick={showCompleted}
        className="completed option"
        value="Completed">
        Completed
      </button>
    </StyledFilterTodoDesktop>
  )
}
