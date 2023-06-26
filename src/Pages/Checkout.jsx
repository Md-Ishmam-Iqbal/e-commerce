/* eslint-disable react/prop-types */
import { CartContext } from "../Context/ShoppingCartContext";
import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Box, Modal } from "@mui/material";

function Checkout({ products }) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const navigate = useNavigate();

  const cart = useContext(CartContext);
  const items = cart.items;

  return (
    <main>
      <div className="checkout-page">
        <h1>Checkout</h1>
        {items.map((item) => {
          return products.map((product) => {
            if (product.id === item.id) {
              return (
                <section key={product.id}>
                  <h2>Product Name: {product.title}</h2>
                  <h2>Quantity: {item.quantity}</h2>
                  <button onClick={() => navigate("/")}>
                    Back to Shopping
                  </button>
                  <button onClick={handleModalOpen}>
                    <h3>Confirm Payment</h3>
                  </button>
                </section>
              );
            }
          });
        })}
      </div>
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
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 14,
            p: 4,
          }}
        >
          <div className="modal-text">
            <p>Your order has been confirmed</p>
            <p className="material-symbols-outlined">check_circle</p>
            <h1>Thank you for shopping with us</h1>
          </div>
          <button onClick={() => navigate("/")}>Back to Shopping</button>
        </Box>
      </Modal>
    </main>
  );
}

export default Checkout;
