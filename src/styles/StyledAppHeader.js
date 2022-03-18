import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledTodoText = styled.span`
  color: var(--white);
  font-size: 2.5rem;
  font-weight: var(--font-weight-bold);
  letter-spacing: 15px;
  line-height: 0;
  text-transform: uppercase;

  @media only screen and (min-width: 990px) {
    font-size: 4rem;
  }
`

export const StyledThemeToggler = styled.img`
  cursor: pointer;
  height: 20px;
  width: 20px;

  @media only screen and (min-width: 990px) {
    height: 26px;
    width: 26px;
  }
`
