import { atom } from "recoil"

export const todoListState = atom({
  key: "TodoList",
  default: [
    {
      id: 1,
      text: "Complete online JavaScript course",
      isChecked: true,
      isDeleted: false,
    },
    {
      id: 2,
      text: "Jog around the park 3x",
      isChecked: false,
      isDeleted: false,
    },
    {
      id: 3,
      text: "10 minutes meditation",
      isChecked: true,
      isDeleted: false,
    },
    {
      id: 4,
      text: "Read for 1 hour",
      isChecked: false,
      isDeleted: false,
    },
    {
      id: 5,
      text: "Pick up groceries",
      isChecked: false,
      isDeleted: false,
    },
    {
      id: 6,
      text: "Complete Todo App on Frontend Mentor",
      isChecked: false,
      isDeleted: false,
    },
  ],
})

export const todoListFilterState = atom({
  key: "TodoListFilter",
  default: "All",
})
