import MobileLight from "../images/bg-mobile-light.jpg"
import MobileDark from "../images/bg-mobile-dark.jpg"
import DesktopLight from "../images/bg-desktop-light.jpg"
import DesktopDark from "../images/bg-desktop-dark.jpg"

export const themes = {
  light: {
    heroMobile: `${MobileLight}`,
    heroDesktop: `${DesktopLight}`,
    appBackground: "var(--lt-very-light-gray)",
    inputBackground: "var(--white)",
    inputText: "var(--dt-very-dark-grayish-blue-2)",
    placeholderText: "var(--lt-dark-grayish-blue)",
    circle: "var(--lt-very-light-grayish-blue)",
    todolistBackground: "var(--white)",
    todolistText: "var(--lt-very-dark-grayish-blue)",
    todolistTextLineThrough: "var(--lt-light-grayish-blue)",
    todolistBottom: "var(--lt-dark-grayish-blue)",
    todolistBottomHover: "var(--lt-very-dark-grayish-blue)",
    boxShadow: "var(--lt-box-shadow)",
    todolistBottomMobile: "var(--white)",
    borderBottom: "var(--dt-light-grayish-blue-hover)",
  },
  dark: {
    heroMobile: `${MobileDark}`,
    heroDesktop: `${DesktopDark}`,
    appBackground: "var(--dt-very-dark-blue)",
    inputBackground: "var(--dt-very-dark-desaturated-blue)",
    inputText: "var(--dt-light-grayish-blue)",
    placeholderText: "var(--dt-dark-grayish-blue)",
    circle: "var(--dt-very-dark-grayish-blue)",
    todolistBackground: "var(--dt-very-dark-desaturated-blue)",
    todolistText: "var(--dt-light-grayish-blue)",
    todolistTextLineThrough: "var(--dt-very-dark-grayish-blue)",
    todolistBottom: "var(--dt-todolist-bottom)",
    todolistBottomHover: "var(--lt-very-light-grayish-blue)",
    boxShadow: "var(--dt-box-shadow)",
    todolistBottomMobile: "var(--dt-very-dark-desaturated-blue)",
    borderBottom: "var(--border-bottom-color)",
  },
}
