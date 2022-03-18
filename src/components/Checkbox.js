import { StyledCheckbox } from "../styles/StyledCheckbox"

export default function Checkbox({ checkTodo, defaultChecked, isChecked }) {
  return (
    <StyledCheckbox onClick={checkTodo}>
      <input
        className="defaultCheckbox"
        type="checkbox"
        defaultChecked={defaultChecked}
        checked={isChecked}
      />
      <div className="borderWrap">
        <span className="customCheckbox"></span>
      </div>
    </StyledCheckbox>
  )
}
