import styled from "styled-components"

export const StyledTodoListItem = styled.li`
  border-bottom: 1px solid ${props => props.theme.borderBottom};
  color: ${props => props.theme.todolistText};
  cursor: pointer;
  font-size: 1.2rem;
  list-style: none;
  padding: 19px 20px 19px var(--small-left-padding);
  position: relative;
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 600px) {
    font-size: 1.4rem;
    letter-spacing: -0.25px;
    padding: 21px 24px 21px var(--larger-left-padding);
  }

  @media only screen and (min-width: 990px) {
    font-size: 1.8rem;
    padding: 23px 24px 23px var(--largest-left-padding);
  }
`

export const StyledTodoContent = styled.span`
  color: ${props =>
    props.isChecked ? props.theme.todolistTextLineThrough : null};
  margin-right: 12px;
  text-decoration: ${props => (props.isChecked ? "line-through" : null)};
`

export const StyledCrossIcon = styled.img`
  height: 12px;
  width: 12px;

  @media only screen and (min-width: 990px) {
    height: 18px;
    width: 18px;
  }
`
