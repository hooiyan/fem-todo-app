import { useEffect, useState } from "react"
import { RecoilRoot } from "recoil"
import { ThemeProvider } from "styled-components"
import AppHeader from "./components/AppHeader"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import FilterTodosMobile from "./components/FilterTodosMobile"
import Information from "./components/Information"

import GlobalStyle from "./styles/GlobalStyle"
import { StyledWrapper } from "./styles/StyledApp"
import IconMoon from "./images/icon-moon.svg"
import IconSun from "./images/icon-sun.svg"

import { themes } from "./context/themeContext"

export default function App() {
  const { light, dark } = themes
  const [theme, setTheme] = useState("light")
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

    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme)
    } else if (prefersDark) {
      setTheme("dark")
    }
  }, [])

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
    <RecoilRoot>
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
          <Information />
        </StyledWrapper>
      </ThemeProvider>
    </RecoilRoot>
  )
}
