import { useState } from "react"
import TodoListItem from "./TodoListItem"
import FilterTodosDesktop from "./FilterTodosDesktop"
import {
  StyledTodoListWrapper,
  StyledTodoList,
  StyledBottom,
} from "../styles/StyledTodoList"

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      text: "Complete online JavaScript course",
      isChecked: true,
      isDeleted: false,
    },
    {
      text: "Jog around the park 3x",
      isChecked: false,
      isDeleted: false,
    },
    {
      text: "10 minutes meditation",
      isChecked: true,
      isDeleted: false,
    },
    {
      text: "Read for 1 hour",
      isChecked: false,
      isDeleted: false,
    },
    {
      text: "Pick up groceries",
      isChecked: false,
      isDeleted: false,
    },
    {
      text: "Complete Todo App on Frontend Mentor",
      isChecked: false,
      isDeleted: false,
    },
  ])

  const completedTodos = todos.filter((todo) => todo.isChecked)
  const incompleteTodos = todos.filter((todo) => !todo.isChecked)

  // TODO: Something's wrong here, the incomplete todos will get the styling applied to them.
  const deleteTodo = (index) => {
    setTodos([
      ...todos.slice(0, index),
      ...todos.slice(index + 1, todos.length),
    ])
  }

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
