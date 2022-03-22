import { useRecoilState, useRecoilValue } from "recoil"
import { todoListState, todoListFilterState } from "../recoil/recoilState"
import {
  filteredTodoListState,
  todoListStatState,
} from "../recoil/recoilSelector"
import TodoListItem from "./TodoListItem"
import FilterTodosDesktop from "./FilterTodosDesktop"
import {
  StyledTodoListWrapper,
  StyledTodoList,
  StyledBottom,
} from "../styles/StyledTodoList"

export default function TodoList() {
  const [todos, setTodos] = useRecoilState(todoListState)
  const todoList = useRecoilValue(filteredTodoListState)
  const { totalUncompleted } = useRecoilValue(todoListStatState)
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const checkTodo = (index) => {
    setTodos([
      ...todos.slice(0, index),
      {
        id: todos[index].id,
        text: todos[index].text,
        isChecked: !todos[index].isChecked,
        isDeleted: todos[index].isDeleted,
      },
      ...todos.slice(index + 1, todos.length),
    ])
  }

  const deleteTodo = (index) => {
    setTodos([
      ...todos.slice(0, index),
      {
        id: todos[index].id,
        text: todos[index].text,
        isChecked:
          todos[index].isChecked === true ? true : !todos[index].isChecked,
        isDeleted: !todos[index].isDeleted,
      },
      ...todos.slice(index + 1, todos.length),
    ])
  }

  const clearCompleted = () => {
    filter && setFilter("Uncompleted")
  }

  return (
    <StyledTodoListWrapper>
      <StyledTodoList>
        {todoList.map(
          (todo, index) =>
            !todo.isDeleted && (
              <TodoListItem
                key={todo.id}
                todo={todo.text}
                isChecked={todo.isChecked}
                checkTodo={() => checkTodo(index)}
                deleteTodo={() => deleteTodo(index)}
              />
            )
        )}
      </StyledTodoList>
      <StyledBottom>
        <p className="itemLeft">{totalUncompleted} items left</p>
        <FilterTodosDesktop />
        <button
          onClick={clearCompleted}
          className="clearCompleted"
          value="Show Uncompleted">
          Clear Completed
        </button>
      </StyledBottom>
    </StyledTodoListWrapper>
  )
}
