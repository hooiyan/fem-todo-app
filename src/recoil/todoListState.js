import { atom } from "recoil"

export const todoListState = atom({
  key: "TodoList",
  default: [
    {
      text: "Complete online JavaScript course",
      isChecked: true,
      isDeleted: false,
    },
    {
      text: "Jog around the park 3x",
      isChecked: false,
      isDeleted: false,
    },
    {
      text: "10 minutes meditation",
      isChecked: true,
      isDeleted: false,
    },
    {
      text: "Read for 1 hour",
      isChecked: false,
      isDeleted: false,
    },
    {
      text: "Pick up groceries",
      isChecked: false,
      isDeleted: false,
    },
    {
      text: "Complete Todo App on Frontend Mentor",
      isChecked: false,
      isDeleted: false,
    },
  ],
})
