import { createContext } from "react"

export const themes = {
  light: {
    appBackground: "var(--lt-very-light-gray)",
    inputBackground: "var(--white)",
    inputText: "var(--dt-very-dark-grayish-blue-2)",
    placeholderText: "var(--lt-dark-grayish-blue)",
    circle: "var(--lt-very-light-grayish-blue)",
    todolistBackground: "var(--white)",
    todolistText: "var(--lt-very-dark-grayish-blue)",
    todolistTextLineThrough: "var(--lt-light-grayish-blue)",
    todolistBottom: "var(--lt-dark-grayish-blue)",
  },
  dark: {
    appBackground: "var(--dt-very-dark-blue)",
    inputBackground: "var(--dt-very-dark-desaturated-blue)",
    inputText: "var(--dt-light-grayish-blue)",
    placeholderText: "var(--dt-dark-grayish-blue)",
    circle: "var(--dt-very-dark-grayish-blue)",
    todolistBackground: "var(--dt-very-dark-desaturated-blue)",
    todolistText: "var(--dt-light-grayish-blue)",
    todolistTextLineThrough: "var(--dt-very-dark-grayish-blue)",
    todolistBottom: "var(--dt-todolist-bottom)",
  },
}

const ThemeContext = createContext(themes.light)

export default ThemeContext
