import React from "react";
import Card from "./Card";
import "../styles/content-container.css";

export default function ContentContainer() {
  const testArray = ["red", "green", "blue", "orange", "purple"];
  let result = testArray.map((bgColor, index) => (
    <Card key={index} bgColor={bgColor} />
  ));
  return <div className="content-container">{result}</div>;
}
