import { CarrinhoIcon, PerfilIcon } from "../../../../common/icons";
import Typography from "../../../Typography";
import Styles from "./UserActions.module.scss";
import { Link } from "react-router-dom";

type UserActionsProps = {
  cartCount: number;
};

function UserActions({ cartCount }: UserActionsProps) {
  return (
    <div className={Styles.userActions}>
      <a href="#">Login</a>
      <a href="#">
        <PerfilIcon />
      </a>
      <Link
        to="/carrinho"
        style={{ display: "flex", alignItems: "center", gap: "4px" }}
      >
        <CarrinhoIcon />
        <Typography variantStyle="body-small">({cartCount})</Typography>
      </Link>
    </div>
  );
}

export default UserActions;
