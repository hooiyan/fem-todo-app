import AppHeader from "./components/AppHeader"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import FilterTodosMobile from "./components/FilterTodosMobile"
import Information from "./components/Information"
import styles from "./styles/App.module.css"

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <AppHeader />
        <main>
          <AddTodo />
          <TodoList />
          <FilterTodosMobile />
        </main>
        <Information />
      </div>
    </div>
  )
}

export default App
