import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ExploreIcon />
      <FavoriteIcon />
      <HomeIcon />
      <ShoppingCartIcon />
      <AccountCircleIcon />
    </nav>
  );
}
