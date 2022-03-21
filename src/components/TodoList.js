import { useRecoilState } from "recoil"
import { todoListState } from "../recoil/todoListState"
import TodoListItem from "./TodoListItem"
import FilterTodosDesktop from "./FilterTodosDesktop"
import {
  StyledTodoListWrapper,
  StyledTodoList,
  StyledBottom,
} from "../styles/StyledTodoList"

export default function TodoList() {
  const [todos, setTodos] = useRecoilState(todoListState)

  // const completedTodos = todos.filter((todo) => todo.isChecked)
  const incompleteTodos = todos.filter((todo) => !todo.isChecked)

  const checkTodo = (index) => {
    setTodos([
      ...todos.slice(0, index),
      {
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
        text: todos[index].text,
        isChecked:
          todos[index].isChecked === true ? true : !todos[index].isChecked,
        isDeleted: !todos[index].isDeleted,
      },
      ...todos.slice(index + 1, todos.length),
    ])
  }

  const clearCompleted = () => {
    setTodos(incompleteTodos)
  }

  const showAll = () => {
    // Show completed & incomplete todos
    // Basically every todo that is not deleted
    console.log("show all")
  }

  const showActive = () => {
    // Show incomplete todos only
    console.log("show active")
  }

  const showCompleted = () => {
    // Show completed todos only
    console.log("show completed")
  }

  return (
    <StyledTodoListWrapper>
      <StyledTodoList>
        {todos.map(
          (todo, index) =>
            !todo.isDeleted && (
              <TodoListItem
                key={index}
                todo={todo.text}
                isChecked={todo.isChecked}
                checkTodo={() => checkTodo(index)}
                deleteTodo={() => deleteTodo(index)}
              />
            )
        )}
      </StyledTodoList>
      <StyledBottom>
        <p className="itemLeft">{incompleteTodos.length} items left</p>
        <FilterTodosDesktop
          showAll={showAll}
          showActive={showActive}
          showCompleted={showCompleted}
        />
        <button onClick={clearCompleted} className="clearCompleted">
          Clear Completed
        </button>
      </StyledBottom>
    </StyledTodoListWrapper>
  )
}
