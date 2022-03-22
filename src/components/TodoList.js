import { useRecoilState, useRecoilValue } from "recoil"
import { todoListFilterState } from "../recoil/recoilState"

import TodoListItem from "./TodoListItem"

import FilterTodosDesktop from "./FilterTodosDesktop"
import {
  StyledTodoListWrapper,
  StyledTodoList,
  StyledBottom,
} from "../styles/StyledTodoList"

import {
  filteredTodoListState,
  todoListStatState,
} from "../recoil/recoilSelector"

export default function TodoList() {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const todoList = useRecoilValue(filteredTodoListState)
  const { totalUncompleted } = useRecoilValue(todoListStatState)

  const clearCompleted = () => {
    filter === "All" && setFilter("Uncompleted")
  }

  const betterWording = totalUncompleted <= 1 ? "item left" : "items left"

  return (
    <StyledTodoListWrapper>
      <StyledTodoList>
        {todoList.map(
          todo => !todo.isDeleted && <TodoListItem key={todo.id} item={todo} />
        )}
      </StyledTodoList>
      <StyledBottom>
        <p className="itemLeft">
          {filter === "Completed" ? 0 : totalUncompleted} {betterWording}
        </p>
        <FilterTodosDesktop />
        <button onClick={clearCompleted} className="clearCompleted">
          Clear Completed
        </button>
      </StyledBottom>
    </StyledTodoListWrapper>
  )
}
