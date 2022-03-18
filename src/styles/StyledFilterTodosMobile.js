import styled from "styled-components"

export const StyledFilterTodoMobile = styled.section`
  display: flex;
  justify-content: space-between;
  color: var(--lt-dark-grayish-blue);
  font-size: 1.4rem;
  font-weight: var(--font-weight-bold);

  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
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

  .selected {
    color: var(--primary-bright-blue);
  }

  .option {
    cursor: pointer;
  }

  .option:hover {
    color: var(--lt-very-dark-grayish-blue);
  }
`
