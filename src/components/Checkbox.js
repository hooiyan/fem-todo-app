import styles from "../styles/Checkbox.module.css"

export default function Checkbox() {
  return (
    <div className={styles.container}>
      <input
        className={styles.defaultCheckbox}
        type="checkbox"
        // checked="checked"
      />
      <div className={styles.borderWrap}>
        <span className={styles.customCheckbox}></span>
      </div>
    </div>
  )
}
