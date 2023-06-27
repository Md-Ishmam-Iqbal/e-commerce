/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../Context/ShoppingCartContext";
import { useContext } from "react";

const Navbar = ({ toggleSideBar, toggleCartOpen }) => {
  const cart = useContext(CartContext);
  const location = useLocation();
  const currentPath = location.pathname;

  const isCheckoutPage = currentPath === "/checkout";

  return (
    <>
      {!isCheckoutPage && (
        <nav>
          <button className="hamburger-button" onClick={toggleSideBar}>
            <svg width="22px" height="25px" viewBox="0 0 150 150">
              <rect y="40" width="150" height="10"></rect>
              <rect y="75" width="150" height="10"></rect>
              <rect y="110" width="150" height="10"></rect>
            </svg>
          </button>
          <Link to={`/`} className="logo hover-drop-shadow no-txt-decoration">
            E-commerce
          </Link>
          <input className="search" placeholder="Search"></input>
          <div className="location hover-drop-shadow">Dhaka</div>
          <div className="choose-language">
            <div className="hover-drop-shadow">EN</div>|
            <div className="hover-drop-shadow">বাং</div>|
            <div className="hover-drop-shadow">ع</div>
          </div>
          <div className="cart-icon br-hor-gold" onClick={toggleCartOpen}>
            <div className="cart-quantity-label">{cart.items.length}</div>
            <span className="material-symbols-outlined">shopping_bag</span>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
