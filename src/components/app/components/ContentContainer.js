import { Route, Switch } from "react-router-dom";
// import HomePage from "../../../pages/home/HomePage";
import ProfilePage from "../../../pages/profile/ProfilePage";
import FavoritesPage from "../../../pages/favorites/FavoritesPage";
import "../styles/content-container.css";

export default function ContentContainer() {
  return (
    <main className="content-container">
      <Switch>
        {/* <Route path="/" exact component={HomePage} /> */}
        <Route path="/explore" />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/cart">Cart</Route>
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </main>
  );
}
