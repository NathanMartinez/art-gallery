import React from "react";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import "./styles/navbar.css";

export default function NavbarEx() {
  return (
    <header className="nav-header">
      <h3 className="nav-logo">Aesthetico</h3>
      <input
        type="checkbox"
        name="menu-toggle"
        id="menu-toggle"
        className="menu-toggle"
      />
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="list-item">
            <HomeIcon className="nav-icon" />
            Home
          </li>
          <li className="list-item">
            <ExploreIcon className="nav-icon" />
            Explore
          </li>
          <li className="list-item">
            <FavoriteIcon className="nav-icon" />
            Favorites
          </li>
          <li className="list-item">
            <ShoppingCartIcon className="nav-icon" />
            Cart
          </li>
          <li className="list-item">
            <AccountCircleIcon className="nav-icon" />
            Account
          </li>
          <li className="list-item">
            <ContactSupportIcon className="nav-icon" />
            Support
          </li>
        </ul>
      </nav>
      <label htmlFor="menu-toggle" className="ham-menu-container">
        <span className="ham-menu"></span>
      </label>
    </header>
  );
}
