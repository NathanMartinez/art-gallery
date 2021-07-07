import React from "react";
import { Route, Switch } from "react-router-dom";
import ProfilePage from "../pages/profile/ProfilePage";
import FavoritesPage from '../pages/favorites/FavoritesPage'
import "../styles/content-container.css";

export default function ContentContainer() {
  return (
    <div className="content-container">
      <Switch>
        <Route path="/" exact>
        Hello!
        </Route>
        <Route path="/explore">Explore</Route>
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/cart">Cart</Route>
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
}
