import Styles from "./Logo.module.scss";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../../../common/icons/LogoIcon";

function Logo() {
  return (
    <div className={Styles.logo}>
      <Link to="/">
        <LogoIcon />
      </Link>
    </div>
  );
}

export default Logo;
