import AppHeader from "./components/AppHeader"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import FilterTodosMobile from "./components/FilterTodosMobile"
import Information from "./components/Information"
import { StyledWrapper } from "./styles/StyledApp"

export default function App() {
  return (
    <StyledWrapper>
      <AppHeader />
      <main>
        <AddTodo />
        <TodoList />
        <FilterTodosMobile />
      </main>
      <Information />
    </StyledWrapper>
  )
}
