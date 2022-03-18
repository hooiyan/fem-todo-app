import styled from "styled-components"

export const StyledForm = styled.form`
  position: relative;

  .container {
    background: ${(props) => props.theme.inputBackground};
    cursor: pointer;
    display: block;
    position: absolute;
    bottom: 50%;
    left: 20px;
  }

  /* Hide the browser's default checkbox */
  .container .defaultCheckbox {
    cursor: pointer;
    position: absolute;
    height: 0;
    width: 0;
    opacity: 0;
  }

  /* Create a cusom checkbox */
  .customCheckbox {
    border: 1px solid ${(props) => props.theme.circle};
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .customCheckbox:after {
    content: "";
    display: none;
    position: absolute;
  }

  /* Show the checkmark when checked */
  .container .defaultCheckbox:checked ~ .customCheckbox:after {
    display: block;
  }

  .textbox {
    background-color: ${props => props.theme.inputBackground};
    border: none;
    border-radius: var(--border-radius);
    color: ${(props) => props.theme.inputText};
    caret-color: var(--primary-bright-blue);
    font-family: var(--font-family);
    margin-top: 40px;
    margin-bottom: 16px;
    padding: 18px 20px 18px var(--small-left-padding);
    width: 100%;
  }

  .textbox::placeholder {
    color: ${(props) => props.theme.placeholderText};
    font-size: 1.2rem;
    letter-spacing: -0.17px;
  }

  @media only screen and (min-width: 600px) {
    .container {
      left: 24px;
    }

    .textbox {
      font-size: 1.4rem;
      letter-spacing: -0.25px;
      padding: 18px 20px 18px var(--larger-left-padding);
    }

    .textbox::placeholder {
      font-size: 1.4rem;
    }
  }

  @media only screen and (min-width: 990px) {
    /* TODO: Adjust the bottom and left values */
    .container {
      bottom: 48%;
    }

    .customCheckbox {
      height: 24px;
      width: 24px;
    }

    .textbox {
      font-size: 1.8rem;
      margin-top: 58px;
      margin-bottom: 24px;
      padding: 23px 24px 23px var(--largest-left-padding);
    }

    .textbox::placeholder {
      font-size: 1.8rem;
    }
  }
`
