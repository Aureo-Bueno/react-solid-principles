import { InputHTMLAttributes } from "react";
import styles from "./RadioButton.module.css";

type RadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

function RadioButton({ label, onChange, ...props }: RadioButtonProps) {
  return (
    <label className={styles.radioContainer}>
      <input
        type="radio"
        className={styles.radioInput}
        onChange={onChange}
        {...props}
      />
      <span className={styles.customRadio}></span>
      <span className={styles.label}>{label}</span>
    </label>
  );
}

export default RadioButton;
