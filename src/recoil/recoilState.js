import { atom } from "recoil"
import { v4 as uuidv4 } from "uuid"

export const todoListState = atom({
  key: "TodoList",
  default: [
    {
      id: uuidv4(),
      text: "Complete online JavaScript course",
      isChecked: true,
      isDeleted: false,
    },
    {
      id: uuidv4(),
      text: "Jog around the park 3x",
      isChecked: false,
      isDeleted: false,
    },
    {
      id: uuidv4(),
      text: "10 minutes meditation",
      isChecked: true,
      isDeleted: false,
    },
    {
      id: uuidv4(),
      text: "Read for 1 hour",
      isChecked: false,
      isDeleted: false,
    },
    {
      id: uuidv4(),
      text: "Pick up groceries",
      isChecked: false,
      isDeleted: false,
    },
    {
      id: uuidv4(),
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
