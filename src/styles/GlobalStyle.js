import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition-property: color, background, background-image, border, border-bottom;
  transition-duration: 0.3s;
}

:root {
  /* Primary colors */
  --primary-bright-blue: hsl(220, 98%, 61%);
  --checked-background: linear-gradient(
    hsl(192, 100%, 67%),
    hsl(280, 87%, 65%)
  );
  --white: hsl(0, 0%, 100%);

  /* Light theme colors */
  --lt-very-light-gray: hsl(0, 0%, 98%);
  --lt-very-light-grayish-blue: hsl(236, 33%, 92%);
  --lt-light-grayish-blue: hsl(233, 11%, 84%);
  --lt-dark-grayish-blue: hsl(236, 9%, 61%);
  --lt-very-dark-grayish-blue: hsl(235, 19%, 35%);

  /* Dark theme colors */
  --dt-very-dark-blue: hsl(235, 21%, 11%);
  --dt-very-dark-desaturated-blue: hsl(235, 24%, 19%);
  --dt-light-grayish-blue: hsl(234, 39%, 85%);
  --dt-light-grayish-blue-hover: hsl(236, 33%, 92%);
  --dt-dark-grayish-blue: hsl(234, 11%, 52%);
  --dt-very-dark-grayish-blue: hsl(233, 14%, 35%);
  --dt-very-dark-grayish-blue-2: hsl(237, 14%, 26%);

  --dt-todolist-bottom: hsl(235, 16%, 43%);
  --border-bottom-color: hsl(237, 14%, 26%);

  /* Typography */
  --font-family: "Josefin Sans", sans-serif;
  --font-weight-regular: 400;
  --font-weight-bold: 700;
  --font-size-default: 1.8rem;

  /* Others */
  --border-radius: 5px;
  --lt-box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  --dt-box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
  --small-left-padding: 52px;
  --larger-left-padding: 62px;
  --largest-left-padding: 72px;
}

html {
  font-size: 62.5%;
  height: 100%;
}

body {
  background-color: ${(props) => props.theme.appBackground};
  font-family: var(--font-family);
  font-size: 1.6rem;
  height: 100%;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root {
  background-image: ${(props) => `url(${props.theme.heroMobile})`};
  background-size: 100% 200px;
  background-repeat: no-repeat;
  height: 100%;
  padding: 48px 24px;
}

@media only screen and (min-width: 376px) {
  #root {
    background-image: ${(props) => `url(${props.theme.heroDesktop})`};
  }
}

@media only screen and (min-width: 460px) {
  #root {
    padding: 48px;
  }
}

@media only screen and (min-width: 990px) {
  #root {
    background-size: 100% 300px;
    padding: 70px 48px;
  }
}
`

export default GlobalStyle
