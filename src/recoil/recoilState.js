import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"
import { v4 as uuidv4 } from "uuid"

const { persistAtom } = recoilPersist()

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
      isChecked: false,
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
  effects_UNSTABLE: [persistAtom],
})

export const todoListFilterState = atom({
  key: "TodoListFilter",
  default: "All",
})
