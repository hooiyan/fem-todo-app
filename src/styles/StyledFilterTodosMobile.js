import styled from "styled-components"

export const StyledFilterTodoMobile = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.todolistBackground};
  border-radius: var(--border-radius);
  box-shadow: ${props => props.theme.boxShadow};
  font-size: 1.4rem;
  font-weight: var(--font-weight-bold);
  margin-top: 16px;
  padding: 15px 30px;

  @media only screen and (min-width: 375px) {
    padding: 15px 80px;
  }

  @media only screen and (min-width: 600px) {
    display: none;
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 990px) {
    font-size: 1.4rem;
  }

  .option {
    color: ${props => props.theme.todolistBottom};
    cursor: pointer;
    font-weight: var(--font-weight-bold);

    &:hover {
      color: ${props => props.theme.todolistBottomHover};
    }
  }

  .selected {
    color: var(--primary-bright-blue);
  }
`
