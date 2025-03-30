import CartTable from "./cart-table";

export const metadata = {
  title: "장바구니",
};

const CartPage = async () => {
  return (
    <>
      <CartTable />
    </>
  );
};

export default CartPage;
