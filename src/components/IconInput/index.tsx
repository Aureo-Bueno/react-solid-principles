import Input from "../Input";
import { IconInputProps } from "./types";
import Styles from "./IconInput.module.css";

function IconInput({ children, ...props }: IconInputProps) {
  return (
    <div className={Styles.iconInputContainer}>
      <Input {...props} />
          <div className={Styles.iconContainer}>{children} </div>
    </div>
  );
}

export default IconInput;
