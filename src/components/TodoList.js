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
        isChecked: todos[index].isChecked,
        isDeleted: !todos[index].isDeleted,
      },
      ...todos.slice(index + 1, todos.length),
    ])
  }
  console.log(todos)

  const clearCompleted = () => {
    setTodos(incompleteTodos)
  }

  const showAll = () => {
    console.log("show all")
  }

  const showActive = () => {
    console.log("show active")
  }

  const showCompleted = () => {
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
