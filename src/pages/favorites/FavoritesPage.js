import React from 'react'
import Card from "../../components/FavoritesCard";
import "../../styles/favorites-page.css"

export default function FavoritesPage() {
  const testArray = [
    "https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/02/03/23/17/ganesha-3128714_1280.png",
    "https://cdn.pixabay.com/photo/2017/07/14/18/03/sculpture-2504555_1280.png",
    "https://cdn.pixabay.com/photo/2017/08/18/18/23/sculpture-2655931_1280.png",
    "https://cdn.pixabay.com/photo/2018/08/16/22/11/statue-3611604_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/10/05/13/37/metal-morphosis-2819439_1280.png",
  ];

  let result = testArray.map((image, index) => (
    <Card key={index} imgUrl={image} />
  ));
  
  return (
    <div className="favorites-page">
      {result}
    </div>
  )
}
