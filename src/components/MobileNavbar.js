import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {
  Explore as ExploreIcon,
  Favorite as FavoriteIcon,
  Home as HomeIcon,
  AccountCircle as AccountCircleIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction icon={<ExploreIcon />} />
      <BottomNavigationAction icon={<FavoriteIcon />} />
      <BottomNavigationAction icon={<HomeIcon />} />
      <BottomNavigationAction icon={<ShoppingCartIcon />} />
      <BottomNavigationAction icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
}
