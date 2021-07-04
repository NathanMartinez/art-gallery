import React from "react";
import Card from "./Card";
import { Route, Switch } from "react-router-dom";
import "../styles/content-container.css";

export default function ContentContainer() {
  const testArray = ["red", "green", "blue", "orange", "purple", "cyan", "lime", "grey"];
  let result = testArray.map((bgColor, index) => (
    <Card key={index} bgColor={bgColor} />
  ));
  return (
    <div className="content-container">
      <Switch>
        <Route path="/" exact>
          {result}
        </Route>
        <Route path="/explore">Explore</Route>
        <Route path="/favorites">Favorites</Route>
        <Route path="/cart">Cart</Route>
        <Route path="/profile">Profile</Route>
      </Switch>
    </div>
  );
}
