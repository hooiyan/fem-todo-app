import { useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { todoListState } from "../recoil/todoListState"
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
