import styled from "styled-components"

export const StyledFilterTodoDesktop = styled.section`
  display: none;

  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: var(--font-weight-bold);
    width: 166px;
  }

  @media only screen and (min-width: 990px) {
    font-size: 1.4rem;
  }
  
  .option {
    color: ${(props) => props.theme.todolistBottom};
    font-weight: var(--font-weight-bold);
    cursor: pointer;
  }

  .selected {
    color: var(--primary-bright-blue);
  }

  .option:hover {
    color: ${(props) => props.theme.todolistBottomHover};
  }
`
