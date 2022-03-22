import { useRecoilState } from "recoil"

import { StyledFilterTodoDesktop } from "../styles/StyledFilterTodosDesktop"

import { todoListFilterState } from "../recoil/recoilState"

export default function FilterTodosDesktop() {
  // TODO: Find a way to optimize this code to make it reusable in multiple components
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const showAll = () => {
    setFilter("All")
  }

  const showActive = () => {
    setFilter("Uncompleted")
  }

  const showCompleted = () => {
    setFilter("Completed")
  }

  return (
    <StyledFilterTodoDesktop>
      <button
        onClick={showAll}
        className={`${
          filter === "All"
            ? "all option selected"
            : filter === "Clear"
            ? "all option selected"
            : "all option"
        }`}>
        All
      </button>
      <button
        onClick={showActive}
        className={`${
          filter === "Uncompleted" ? "active option selected" : "active option"
        }`}>
        Active
      </button>
      <button
        onClick={showCompleted}
        className={`${
          filter === "Completed"
            ? "completed option selected"
            : "completed option"
        }`}>
        Completed
      </button>
    </StyledFilterTodoDesktop>
  )
}
