import styled from "styled-components"

export const StyledTodoListWrapper = styled.section`
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`

export const StyledTodoList = styled.ul`
  background-color: ${(props) => props.theme.todolistBackground};
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
`

export const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.todolistBackground};
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  color: ${(props) => props.theme.todolistBottom};
  font-size: 1.2rem;
  letter-spacing: -0.17px;
  padding: 16px 20px 20px 20px;

  .clearCompleted {
    font-size: 1.2rem;
  }

  .clearCompleted:hover {
    color: ${(props) => props.theme.todolistBottomHover};
    cursor: pointer;
  }

  @media only screen and (min-width: 600px) {
    padding: 20px 24px;
  }

  @media only screen and (min-width: 990px) {
    font-size: 1.4rem;
    letter-spacing: -0.19px;

    .clearCompleted {
      font-size: 1.4rem;
    }
  }
`
