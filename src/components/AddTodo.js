import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { v4 as uuidv4 } from "uuid"
import { todoListState } from "../recoil/recoilState"
import { StyledForm } from "../styles/StyledAddTodo"

export default function AddTodo() {
  const [inputValue, setInputValue] = useState("")
  const setTodoList = useSetRecoilState(todoListState)

  const addTodo = (e) => {
    e.preventDefault()
    inputValue &&
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: uuidv4(),
          text: inputValue,
          isChecked: false,
          isDeleted: false,
        },
      ])
    setInputValue("")
  }

  const onInputChange = ({ target: { value } }) => {
    setInputValue(value)
  }

  return (
    <StyledForm onSubmit={addTodo}>
      <div className="container">
        <input
          className="defaultCheckbox"
          type="checkbox"
          defaultChecked={false}
        />
        <span className="customCheckbox"></span>
      </div>
      <input
        className="textbox"
        type="text"
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={onInputChange}
      />
    </StyledForm>
  )
}
