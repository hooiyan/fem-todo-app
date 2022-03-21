import { StyledCheckbox } from "../styles/StyledCheckbox"

export default function Checkbox({ checkTodo, isChecked }) {
  return (
    <StyledCheckbox onClick={checkTodo}>
      <input
        className="defaultCheckbox"
        type="checkbox"
        defaultChecked={isChecked}
      />
      <div className="border">
        <span className="customCheckbox"></span>
      </div>
    </StyledCheckbox>
  )
}
