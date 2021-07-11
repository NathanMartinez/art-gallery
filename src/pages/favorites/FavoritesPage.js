import React from "react";
import Card from "../../components/FavoritesCard";
import { cardData } from "../../testData/FavoriteData";
import "../../styles/favorites-page.css";

export default function FavoritesPage() {
  // {
  // id: 0000001,
  // name: "Iron Table",
  // category: "metal_work",
  // imgUrl: "test.jpg",
  // description: "Stuff and other stuff",
  // liked: false,
  // createdDate: 7/21/2021
  // price: 299.99
  // likes: 435
  // qtySold: 20
  // }
  let result = cardData.map((data, index) => (
    <Card key={index} data={data} />
  ));

  return <div className="favorites-page">{result}</div>;
}
