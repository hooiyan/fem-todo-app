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
  // const [theme, setTheme] = useState("light");
  // const isDarkTheme = theme === "dark";
  
  // const toggleTheme = () => {
  //   const updatedTheme = isDarkTheme ? "light" : "dark";
  //   setTheme(updatedTheme);
  //   localStorage.setItem("theme", updatedTheme);
  // };
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   const prefersDark = window.matchMedia &&
  //     window.matchMedia('(prefers-color-scheme: dark)').matches;
  //   if (savedTheme && ["dark", "light"].includes(savedTheme)) {
  //     setTheme(savedTheme);
  //   } else if (prefersDark) {
  //     setTheme("dark");
  //   }
  // }, []);

  const { light, dark } = themes

  const [isLightMode, setTheme] = useState(false)
  const toggleTheme = () => {
    // const updatedtheme = isLightMode ? light : dark
    // setTheme(updatedtheme)
    setTheme(!isLightMode)
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
          <FilterTodosMobile
            showAll={showAll}
            showActive={showActive}
            showCompleted={showCompleted}
          />
        </main>
        <Information />
      </StyledWrapper>
    </ThemeProvider>
  )
}
