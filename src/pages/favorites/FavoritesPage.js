import React from "react";
import Card from "../../components/cards/Card";
import images from "../../components/cards/testData/getImages";
import "../../styles/favorites-page.css";

export default function FavoritesPage() {
  let result = images.map((data, index) => (
    <Card key={index} data={data} />
  ));

  return <div className="favorites-page">{result}</div>;
}
