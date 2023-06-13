import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="hb-button hover-drop-shadow">|||</div>
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
    </div>
  );
};

export default Navbar;
