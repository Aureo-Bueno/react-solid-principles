import Typography from "../Typography";

function CartEmptyMessage() {
  return (
    <div style={{ marginTop: "15px" }}>
      <Typography>Não existem produtos no carrinho.</Typography>
    </div>
  );
}

export default CartEmptyMessage;
