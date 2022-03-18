import { useState } from "react"
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

  const [isLightMode, setTheme] = useState(true)
  const toggleTheme = () => {
    setTheme(!isLightMode)
  }

  return (
    <ThemeProvider theme={isLightMode ? light : dark}>
      <GlobalStyle />
      <StyledWrapper>
        <AppHeader
          toggleTheme={toggleTheme}
          icon={isLightMode ? IconMoon : IconSun}
        />
        <main>
          <AddTodo />
          <TodoList />
          <FilterTodosMobile />
        </main>
        <Information />
      </StyledWrapper>
    </ThemeProvider>
  )
}
