import styled from "styled-components"

export const StyledTodoListItem = styled.li`
  border-bottom: 1px solid var(--lt-very-light-grayish-blue);
  color: var(--lt-very-dark-grayish-blue);
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
  margin-right: 12px;

  /* After the user checks the complete button */
  /* color: var(--lt-light-grayish-blue);
text-decoration: line-through; */
`

export const StyledCrossIcon = styled.img`
  height: 12px;
  width: 12px;

  @media only screen and (min-width: 990px) {
    height: 18px;
    width: 18px;
  }
`
