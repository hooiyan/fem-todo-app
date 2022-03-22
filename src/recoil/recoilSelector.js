import { selector } from "recoil"

import { todoListState, todoListFilterState } from "./recoilState"

export const filteredTodoListSelector = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const todos = get(todoListState)

    switch (filter) {
      case "Completed":
        return todos.filter(todo => todo.isChecked)
      case "Uncompleted":
        return todos.filter(todo => !todo.isChecked)
      case "Clear":
        return todos.filter(todo => !todo.isChecked)
      default:
        return todos
    }
  },
})

export const todoListStatSelector = selector({
  key: "TodoListStats",
  get: ({ get }) => {
    const todos = get(todoListState)
    const totalUncompleted = todos.filter(todo => !todo.isChecked).length

    return {
      totalUncompleted,
    }
  },
})
