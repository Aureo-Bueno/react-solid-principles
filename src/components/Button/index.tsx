import { ButtonHTMLAttributes, ReactNode } from "react";
import classnames from "classnames";
import Styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
};

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  style,
  ...props
}: ButtonProps) => {
  return (
    <button
      style={style}
      className={classnames(Styles[variant], Styles[size])}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
