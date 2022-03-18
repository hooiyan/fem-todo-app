import {
  StyledHeader,
  StyledTodoText,
  StyledThemeToggler,
} from "../styles/StyledAppHeader"

export default function AppHeader({ toggleTheme, icon }) {
  return (
    <StyledHeader>
      <StyledTodoText>Todo</StyledTodoText>
      <StyledThemeToggler
        onClick={toggleTheme}
        src={icon}
        alt="toggle theme color"
      />
    </StyledHeader>
  )
}
