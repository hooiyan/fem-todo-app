import { useRecoilValue } from "recoil"

import { StyledFilterTodoMobile } from "../styles/StyledFilterTodosMobile"

import { todoListFilterState } from "../recoil/recoilState"

export default function FilterTodosMobile({
  showAll,
  showActive,
  showCompleted,
}) {
  const todoFilterState = useRecoilValue(todoListFilterState)
  console.log(todoFilterState)

  return (
    <StyledFilterTodoMobile>
      <button
        onClick={showAll}
        className={`${
          todoFilterState === "All"
            ? "all option selected"
            : todoFilterState === "Clear"
            ? "all option selected"
            : "all option"
        }`}>
        All
      </button>
      <button
        onClick={showActive}
        className={`${
          todoFilterState === "Uncompleted"
            ? "active option selected"
            : "active option"
        }`}>
        Active
      </button>
      <button
        onClick={showCompleted}
        className={`${
          todoFilterState === "Completed"
            ? "completed option selected"
            : "completed option"
        }`}>
        Completed
      </button>
    </StyledFilterTodoMobile>
  )
}
