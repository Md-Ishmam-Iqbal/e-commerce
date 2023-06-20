/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ toggleSideBar, toggleCart, cart }) => {
  return (
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
      {/* <div className="cart hover-drop-shadow">🛒 TK 0.00</div> */}
      <div className="cart-icon br-hor-gold" onClick={toggleCart}>
        <div className="quantity-label">10</div>
        <span className="material-symbols-outlined">shopping_bag</span>
      </div>
    </nav>
  );
};

export default Navbar;
