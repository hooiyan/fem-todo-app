import { StyledCheckbox } from "../styles/StyledCheckbox"

export default function Checkbox() {
  return (
    <StyledCheckbox>
      <input className="defaultCheckbox" type="checkbox" />
      <div className="borderWrap">
        <span className="customCheckbox"></span>
      </div>
    </StyledCheckbox>
  )
}
