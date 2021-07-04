import React from "react";
import Card from "./Card";
import { Route, Switch } from "react-router-dom";
import "../styles/content-container.css";
import ProfilePage from "../pages/profile/ProfilePage";

export default function ContentContainer() {
  const testArray = [
    "https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/02/03/23/17/ganesha-3128714_1280.png",
    "https://cdn.pixabay.com/photo/2017/07/14/18/03/sculpture-2504555_1280.png",
  ];
  let result = testArray.map((image, index) => (
    <Card key={index} imgUrl={image} />
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
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
}
