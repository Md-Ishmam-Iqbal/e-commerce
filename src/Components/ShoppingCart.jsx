/* eslint-disable react/prop-types */
const ShoppingCart = ({ cartOpen }) => {
  return (
    <section
      className={`shopping-cart ${cartOpen ? "shopping-cart-open" : ""}`}
    >
      <h1>Shopping Cart</h1>
    </section>
  );
};

export default ShoppingCart;
