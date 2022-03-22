import styled from "styled-components"
import IconCheck from "../images/icon-check.svg"

export const StyledCheckbox = styled.div`
  background-color: ${props => props.theme.inputBackground};
  cursor: pointer;
  display: block;
  position: absolute;
  left: 20px;
  top: 15px;

  /* Hide the browser's default checkbox */
  /* But place it on top of the customCheckbox so that we can check it on and off */
  .defaultCheckbox {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    z-index: 999;
  }

  .customCheckbox {
    background: ${props => props.theme.inputBackground};
    border: 1px solid ${props => props.theme.circle};
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
  }

  /* On mouse-over, add a gradient background color */
  .defaultCheckbox:hover ~ .border {
    background: var(--checked-background);
    border-radius: 50%;
    padding: 10px;
    position: relative;
  }

  /* When the checkbox is checked, add a gradient background */
  .defaultCheckbox:checked ~ .border .customCheckbox {
    background-image: var(--checked-background);
    border: none;
  }

  /* Style the checkmark/indicator */
  .customCheckbox:after {
    background-image: url(${IconCheck});
    content: "";
    display: none;
    position: absolute;
    top: 6px;
    left: 5px;
    height: 9px;
    width: 11px;
  }

  /* Show the checkmark when checked */
  .defaultCheckbox:checked ~ .border .customCheckbox:after {
    display: block;
  }

  @media only screen and (min-width: 600px) {
    top: 17px;
    left: 24px;
  }

  @media only screen and (min-width: 990px) {
    top: 19px;

    .defaultCheckbox,
    .customCheckbox {
      height: 24px;
      width: 24px;
    }

    .defaultCheckbox:hover ~ .border {
      padding: 12px;
    }

    .customCheckbox:after {
      top: 8px;
      left: 7px;
      height: 9px;
      width: 11px;
    }
  }
`
