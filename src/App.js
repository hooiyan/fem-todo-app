import { useEffect, useState } from "react"
import { useSetRecoilState } from "recoil"
import { ThemeProvider } from "styled-components"

import AppHeader from "./components/AppHeader"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import FilterTodosMobile from "./components/FilterTodosMobile"
import DnD from "./components/DnD"

import GlobalStyle from "./styles/GlobalStyle"
import { StyledWrapper } from "./styles/StyledApp"
import IconMoon from "./images/icon-moon.svg"
import IconSun from "./images/icon-sun.svg"

import { themes } from "./context/themeContext"
import { todoListFilterState } from "./recoil/recoilState"

export default function App() {
  const { light, dark } = themes
  // The initial value "light" is chosen here to accommodate `prefers-color-scheme` media queries
  // It could be either "light" or "dark"
  const [theme, setTheme] = useState("light")
  // Evaluate isDarkTheme based on the initial theme value
  const isDarkTheme = theme === "dark"

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark"
    setTheme(updatedTheme)
    localStorage.setItem("theme", updatedTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches

    // If the user has toggled the theme manually, the theme will be updated and saved to localStorage, otherwise the theme will be set based on the `prefers-color-scheme` media query
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme)
    } else if (prefersDark) {
      setTheme("dark")
    }
  }, [])

  // TODO: Find a way to optimize this code to make it reusable in multiple components
  const setTodoFilter = useSetRecoilState(todoListFilterState)

  const showAll = () => {
    setTodoFilter("All")
  }

  const showActive = () => {
    setTodoFilter("Uncompleted")
  }

  const showCompleted = () => {
    setTodoFilter("Completed")
  }

  return (
    <ThemeProvider theme={isDarkTheme ? dark : light}>
      <GlobalStyle />
      <StyledWrapper>
        <AppHeader
          toggleTheme={toggleTheme}
          icon={isDarkTheme ? IconSun : IconMoon}
        />
        <main>
          <AddTodo />
          <TodoList />
          <FilterTodosMobile
            showAll={showAll}
            showActive={showActive}
            showCompleted={showCompleted}
          />
        </main>
        <DnD />
      </StyledWrapper>
    </ThemeProvider>
  )
}
