/* eslint-disable react/prop-types */
import { CartContext } from "../Context/ShoppingCartContext";
import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Box, Modal } from "@mui/material";

function Checkout({ products, sideBarOpen }) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
    cart.removeAllFromCart();
  };

  const navigate = useNavigate();

  const cart = useContext(CartContext);
  const items = cart.items;

  function getTotalCost() {
    let totalCost = 0;
    let cartProducts = cart.items;
    cartProducts.map((cartItem) => {
      products.map((product) => {
        if (product.id === cartItem.id) {
          totalCost += product.price * cartItem.quantity;
        }
      });
    });
    return totalCost;
  }

  if (cart.items.length === 0) {
    return (
      <main
        className={`checkout-page ${
          sideBarOpen ? "checkout-page-right-margin" : ""
        }`}
      >
        <h1 className="checkout-header">Checkout</h1>
        <div className="checkout-empty">
          <h1 className="checkout-empty-text">Your cart is empty</h1>
          <button
            onClick={() => navigate("/")}
            className="checkout-button back-to-shopping"
          >
            Back to Shopping
          </button>
        </div>
      </main>
    );
  }

  return (
    <main
      className={`checkout-page ${
        sideBarOpen ? "checkout-page-right-margin" : ""
      }`}
    >
      <h1 className="checkout-header">Checkout</h1>
      <section className="checkout-grid">
        <ul className="headings">
          <li>Description</li>
          <li>Quantity</li>
          <li>Remove</li>
          <li>Price</li>
        </ul>
        {items.map((item) => {
          return products.map((product) => {
            if (product.id === item.id) {
              return (
                <ul key={product.id} className="checkout-product-details">
                  <li className="checkout-title checkout-product-text">
                    {product.title}
                  </li>
                  <li className="checkout-quantity-container">
                    <button
                      onClick={() => cart.decreaseCartQuantity(product.id)}
                      className="checkout-quantity-operator"
                    >
                      -
                    </button>{" "}
                    <span className="checkout-quantity">{item.quantity}</span>
                    <button
                      onClick={() => cart.increaseCartQuantity(product.id)}
                      className="checkout-quantity-operator"
                    >
                      +
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => cart.removeFromCart(product.id)}
                      className="checkout-remove-btn"
                    >
                      Remove All
                    </button>
                  </li>
                  <li>{(product.price * item.quantity).toFixed(2)} TK</li>
                </ul>
              );
            }
          });
        })}
        <div className="checkout-total">
          <span className="total-title">Total Amount</span>
          <span className="total-amount">{getTotalCost().toFixed(2)} TK</span>
        </div>
        <div className="checkout-buttons">
          <button onClick={() => navigate("/")} className="checkout-button">
            Back to Shopping
          </button>
          <button
            className="checkout-button confirm-order"
            onClick={handleModalOpen}
          >
            <h3>Confirm Order</h3>
          </button>
        </div>
      </section>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "fit-content",
            bgcolor: "background.paper",
            boxShadow: 20,
            p: 4,
            textAlign: "center",
          }}
        >
          <div className="modal-text-wrapper">
            <h1 className="order-confirmed">
              <span className="material-symbols-outlined">check_circle</span>
              <span>Your order has been confirmed</span>
            </h1>
            <p>Thank you for shopping with us</p>
          </div>
          <button
            className="checkout-button modal-shopping"
            onClick={() => {
              navigate("/");
              cart.removeAllFromCart();
            }}
          >
            Back to Shopping
          </button>
        </Box>
      </Modal>
    </main>
  );
}

export default Checkout;
