import {
  Explore,
  Favorite,
  Home,
  ShoppingCart,
  AccountCircle,
  ContactSupport,
} from "@material-ui/icons";

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
            <Home className="nav-icon" />
            Home
          </li>
          <li className="list-item">
            <Explore className="nav-icon" />
            Explore
          </li>
          <li className="list-item">
            <Favorite className="nav-icon" />
            Favorites
          </li>
          <li className="list-item">
            <ShoppingCart className="nav-icon" />
            Cart
          </li>
          <li className="list-item">
            <AccountCircle className="nav-icon" />
            Account
          </li>
          <li className="list-item">
            <ContactSupport className="nav-icon" />
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
