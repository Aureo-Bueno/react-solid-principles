import { AddCarrinhoIcon } from "../../common/icons/AddCarrinhoIcon";
import Button from "../Button";
import Styles from "./CartActions.module.css";

type CartActionsProps = {
  handleRedirect: () => void;
};

function CartActions({ handleRedirect }: CartActionsProps) {
  return (
    <div className={Styles.cartActions}>
      <Button onClick={handleRedirect} variant="secondary">
        <AddCarrinhoIcon />
        Continuar comprando
      </Button>
      <Button onClick={() => console.log("pagamento")}>
        Ir para pagamento
      </Button>
    </div>
  );
}
export default CartActions;
