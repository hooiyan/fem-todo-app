import { StyledForm } from "../styles/StyledAddTodo"

export default function AddTodo() {
  return (
    <StyledForm>
      <div className="container">
        <input className="defaultCheckbox" type="checkbox" checked="checked" />
        <span className="customCheckbox"></span>
      </div>
      <input
        className="textbox"
        type="text"
        placeholder="Create a new todo..."
      />
    </StyledForm>
  )
}
