import styled from "styled-components"
import IconCheck from "../images/icon-check.svg"

export const StyledCheckbox = styled.div`
  cursor: pointer;
  display: block;
  position: absolute;
  left: 20px;
  top: 15px;

  /* Hide the browser's default checkbox */
  /* But place it on top of the customCheckbox so that we can check it on and off */
  .defaultCheckbox {
    cursor: pointer;
    position: absolute;
    height: 20px;
    width: 20px;
    opacity: 0;
    top: 0;
    left: 0;
    z-index: 999;
  }

  /* Create a custom checkbox */
  /* It worked, don't change it */
  .customCheckbox {
    background-color: var(--white);
    border: 1px solid var(--dt-light-grayish-blue-hover);
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
  }

  /* On mouse-over, add a gradient background color */
  .defaultCheckbox:hover ~ .borderWrap {
    background: var(--checked-background);
    border-radius: 50%;
    padding: 10px;
    position: relative;
  }

  /* When the checkbox is checked, add a gradient background */
  /* It worked, don't change it */
  & .defaultCheckbox:checked ~ .borderWrap .customCheckbox {
    background-image: var(--checked-background);
    border: none;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  /* It worked, don't change it */
  .customCheckbox:after {
    content: "";
    display: none;
    position: absolute;
  }

  /* Show the checkmark when checked */
  /* It worked, don't change it */
  .defaultCheckbox:checked ~ .borderWrap .customCheckbox:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  /* It worked, don't change it */
  .customCheckbox:after {
    background-image: url(${IconCheck});
    top: 6px;
    left: 5px;
    height: 9px;
    width: 11px;
  }

  @media only screen and (min-width: 600px) {
    top: 17px;
    left: 24px;
  }

  @media only screen and (min-width: 990px) {
    top: 19px;

    /* Hide the browser's default checkbox */
    /* But place it on top of the customCheckbox so that we can check it on and off */
    .defaultCheckbox {
      height: 24px;
      width: 24px;
    }

    /* Create a custom checkbox */
    .customCheckbox {
      height: 24px;
      width: 24px;
    }

    /* On mouse-over, add a gradient background color */
    .defaultCheckbox:hover ~ .borderWrap {
      padding: 12px;
    }

    /* Style the checkmark/indicator */
    .customCheckbox:after {
      top: 8px;
      left: 7px;
      height: 9px;
      width: 11px;
    }
  }
`
