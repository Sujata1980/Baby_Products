
import React, { useState, useEffect } from "react";
import { FaBaby } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();
  const [showMenu, setShowMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const location = useLocation(); // track current route

  const categories = ["Soaps", "Lotions", "Powders", "Diapers", "Shampoos", "Food"];

  // ✅ Reset search input when route changes
  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedCategory(""); // reset input
    }
  }, [location]);

  const handleSelect = (category) => {
    setSelectedCategory(category);
    setShowMenu(false);
  };

  return (
    <div className="navbar">
      {/* logo */}
      <NavLink to="/" className="logo">
        <FaBaby size={40} style={{ color: "#254336" }} />
      </NavLink>

      {/* desktop menu */}
      <ul className="menu-desktop">
        {categories.map((cat) => (
          <li key={cat}>
            <NavLink
              to={cat.toLowerCase()}
              className={({ isActive }) =>
                isActive ? "navlink active" : "navlink"
              }
            >
              {cat}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* mobile searchbar-style dropdown */}
      <div className="menu-mobile">
        <input
          type="text"
          className="menu-input"
          placeholder="Select category..."
          value={selectedCategory}
          onClick={() => setShowMenu(!showMenu)}
          readOnly
        />
        {showMenu && (
          <ul className="dropdown-menu">
            {categories.map((cat) => (
              <li key={cat} onClick={() => handleSelect(cat)}>
                <NavLink to={cat.toLowerCase()}>{cat}</NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* cart icon */}
      <div className="cart-icon">
        <NavLink to="cart">
          <FiShoppingCart size={40} style={{ color: "#254336" }} />
          <span className="cart-count">{cartCount}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
