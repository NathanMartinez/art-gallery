import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {
  Explore as ExploreIcon,
  Favorite as FavoriteIcon,
  Home as HomeIcon,
  AccountCircle as AccountCircleIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@material-ui/icons";
import "../styles/navbar.css"

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function HomeButton() {
  return (
    <div className="home-button">
      <HomeIcon />
    </div>
  );
}

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={classes.root}
    >
      <BottomNavigationAction
        component={Link}
        to="/explore"
        icon={<ExploreIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction component={Link} to="/" icon={<HomeButton />} />
      <BottomNavigationAction
        component={Link}
        to="/cart"
        icon={<ShoppingCartIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/profile"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
}
