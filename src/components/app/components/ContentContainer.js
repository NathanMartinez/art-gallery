import React from "react";
import { Route, Switch } from "react-router-dom";
import ProfilePage from "../../../pages/profile/ProfilePage";
import FavoritesPage from '../../../pages/favorites/FavoritesPage'
import "../styles/content-container.css";
import HomePageSection from '../../HomePageSection'
import HomePage from '../../../pages/home/HomePage'
import ExplorePage from '../../../pages/explore/ExplorePage'

export default function ContentContainer() {
  return (
    <div className="content-container">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/explore" component={ExplorePage}/>
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/cart">Cart</Route>
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
}
