import Styles from "./Input.module.css";
import { InputProps } from "./types";

const Input = ({
  variant = "primary",
  onChange,
  placeholder,
  id,
  style,
  type = "text",
  ...props
}: InputProps) => {
  return (
    <input
      type={type}
      style={style}
      className={Styles[variant]}
      {...props}
      onChange={onChange}
      id={id}
      placeholder={placeholder}
    />
  );
};

export default Input;
