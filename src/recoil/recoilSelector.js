import { selector } from "recoil"
import { todoListState, todoListFilterState } from "./recoilState"

export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const todos = get(todoListState)

    switch (filter) {
      case "Completed":
        return todos.filter((todo) => todo.isChecked)
      case "Uncompleted":
        return todos.filter((todo) => !todo.isChecked)
      default:
        return todos
    }
  },
})

export const todoListStatState = selector({
  key: "TodoListStats",
  get: ({ get }) => {
    const todoList = get(todoListState)
    const totalUncompleted = todoList.filter((todo) => !todo.isChecked).length
    
    return {
      totalUncompleted,
    }
  },
})
