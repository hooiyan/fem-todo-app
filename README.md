# React Todo App

## Table of contents

- [React Todo App](#react-todo-app)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Summary](#summary)
    - [Links](#links)
    - [Screenshot](#screenshot)
  - [Details](#details)
    - [Project purpose and goal](#project-purpose-and-goal)
    - [Web stack and explanation](#web-stack-and-explanation)
    - [Problem and thought process](#problem-and-thought-process)
    - [Lesson learned](#lesson-learned)
    - [Future improvements](#future-improvements)
    - [Useful resources](#useful-resources)
  - [Getting started](#getting-started)
    - [Installing](#installing)
  - [Contributing](#contributing)
  - [Author](#author)

## Overview

### Summary

A dark/light themed React web app built together with Styled Components and Recoil that allows users to add, mark, and delete to-do items. The users can drag and drop to reorder the to-do items.

### Links

- Solution URL: [GitHub](https://github.com/hooiyan/fem-todo-app)
- Live Site URL: [Netlify](https://hy-todo.netlify.app/)

### Screenshot

![](./src/images/screenshots/dark.png)

![](./src/images/screenshots/light.png)


## Details

### Project purpose and goal

One of my goals in becoming a front-end developer is to build at least one to-do app in my lifetime. This might be an overused project but I think it is a nice project for us to get hold of the basics of front-end development.

### Web stack and explanation

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


At first, I planned to build this app with everything that I can do with just React (such as React state and CSS Modules) without installing external packages. However, I decided to integrate Recoil and Styled Components into the app. 

React has always been my go-to framework for building web apps. I have heard of Recoil before and thought of giving it a try this time. I am glad that I chose it as the state management for this app. It is easy to get started with and I think it pairs with React very well.

### Problem and thought process

CSS Modules is working well for me until I want to add theme switching capability. I think it is possible to realize that with CSS Modules. But I find it would be easier to use Styled Components in this case.

Most importantly, there's this one bug that had been bothering me for a day or two. I was not able to find the cause and I was frustrated. Luckily, I did find the cause when I was reviewing the `map` function that is used to loop over the todo items. 

The **problem** is that whenever I delete a todo that is previously being checked off, which has a different styling from the one that has not been checking off yet, the styles will be applied to the next todo item. This is not what we want because the next item is supposed to have its original styling applied to it. _So why does this happen?_ Well, it's because I did not give a unique value for the `key` props.

### Lesson learned

1. Previously, I have always been working on the main branch only. In this project, I tried to make use of **git branching** into my workflow. And it has helped me to not mess up with the main code. When I have to add something new to the project that might break the app, I create a new branch and continue working on that new feature.
2. In React, we are required to provide a special props called `key` in each list item and it needs to be **UNIQUE**. I chose to provide `index` that we got from the `map` function. `index` does work in some cases, but we shouldn't rely on it because it does not guarantee the uniqueness.

### Future improvements

- [ ] Add animations when tasks are deleted
- [ ] The ability to favorite a task and have it appear at the top of the list
- [ ] The ability to create groups or categories of tasks
- [ ] The ability to create a new user account

### Useful resources

- [Create custom checkboxes](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_checkbox) - This has helped me in creating custom checkboxed that are used in the project.
- [Gradient borders in CSS](https://css-tricks.com/gradient-borders-in-css/) - This has helped me in creating a special gradient border when hovering the checkbox. The trick is to wrap the custom checkbox with an additional `div`.
- [Dark Theme with Styled Components](https://medium.com/bigpanda-engineering/dark-theme-with-styled-components-a573dd898e2a)
- [How to Add Drag and Drop in React with React Beautiful DnD](https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/)

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purpose.

### Installing

Clone the repository and run the development server:

```bash
npm install
npm start
# or
yarn install
yarn start
```

## Contributing

Please feel free to send pull request if you want to contribute!

## Author

- Website - [hooiyan](https://hooiyan.netlify.app)
- Frontend Mentor - [@hooiyan](https://www.frontendmentor.io/profile/hooiyan)
