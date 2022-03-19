import { StyledCheckbox } from "../styles/StyledCheckbox"

export default function Checkbox({ checkTodo, isChecked }) {
  return (
    <StyledCheckbox onChange={checkTodo}>
      <input
        className="defaultCheckbox"
        type="checkbox"
        defaultChecked={isChecked}
      />
      <div className="borderWrap">
        <span className="customCheckbox"></span>
      </div>
    </StyledCheckbox>
  )
}
