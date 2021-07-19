import React from "react";
import Card from "../../components/card/Card";
import images from "../../components/card/testData/getImages";
import "../../styles/favorites-page.css";

export default function FavoritesPage() {
  let result = images.map((data, index) => (
    <Card key={index} data={data} />
  ));

  return <div className="favorites-page">{result}</div>;
}
