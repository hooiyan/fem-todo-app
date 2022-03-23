# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Todo app solution](#frontend-mentor---todo-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- [x] View the optimal layout for the app depending on their device's screen size
- [x] See hover states for all interactive elements on the page
- [x] Add new todos to the list
- [x] Mark todos as complete
- [x] Delete todos from the list
- [x] Filter by all/active/complete todos
- [x] Clear all completed todos
- [x] Toggle light and dark mode
- [x] **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./src/images/screenshots/dark.png)

![](./src/images/screenshots/light.png)

### Links

- Solution URL: [View it on GitHub](https://github.com/hooiyan/fem-todo-app)
- Live Site URL: [View it on Vercel](https://h2y-todo.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JavaScript Library
- [Recoil](https://recoiljs.org/) - State Management
- [recoil-persist](https://github.com/polemius/recoil-persist) - localStorage for Recoil
- [React Beautiful DnD](https://github.com/atlassian/react-beautiful-dnd) - Drag n Drop capability
- [Styled Components](https://styled-components.com/) - CSS in JS
- [uuid](https://github.com/uuidjs/uuid) - Unique ID generation

### What I learned

At first, I planned to build this app with everything that I can do with just React (such as React state and CSS Modules) without installing external packages. However, I decided to integrate [Recoil](https://recoiljs.org/) and [Styled Components](https://styled-components.com/) into the app. 

CSS Modules is working well for me until I want to add the theme switching capability.

### Continued development



### Useful resources

- [Create custom checkboxes](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_checkbox) - This has helped me in creating custom checkboxed that are used in the project.
- [Gradient borders in CSS](https://css-tricks.com/gradient-borders-in-css/) - This has helped me in creating a special gradient border when hovering the checkbox. The trick is to wrap the custom checkbox with an additional `div`.
- [Dark Theme with Styled Components](https://medium.com/bigpanda-engineering/dark-theme-with-styled-components-a573dd898e2a)
- [How to Add Drag and Drop in React with React Beautiful DnD](https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/)

## Author

- Frontend Mentor - [@hooiyan](https://www.frontendmentor.io/profile/hooiyan)
