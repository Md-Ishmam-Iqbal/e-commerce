import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ toggleSideBar }) => {
  return (
    <nav>
      <button className="hamburger-button" onClick={toggleSideBar}>
        <svg width="25px" height="25px" viewBox="0 0 100 100">
          <rect y="15" width="100" height="7"></rect>
          <rect y="45" width="100" height="7"></rect>
          <rect y="75" width="100" height="7"></rect>
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
      <div className="cart br-hor-gold">Cart 🛒</div>
    </nav>
  );
};

export default Navbar;
