import IconMoon from "../images/icon-moon.svg"
import {
  StyledHeader,
  StyledTodoText,
  StyledThemeToggler,
} from "../styles/StyledAppHeader"

export default function AppHeader() {
  return (
    <StyledHeader>
      <StyledTodoText>Todo</StyledTodoText>
      <StyledThemeToggler src={IconMoon} alt="toggle theme color" />
    </StyledHeader>
  )
}
