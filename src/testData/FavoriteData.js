const imgList = [
  "https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/02/03/23/17/ganesha-3128714_1280.png",
  "https://cdn.pixabay.com/photo/2017/07/14/18/03/sculpture-2504555_1280.png",
  "https://cdn.pixabay.com/photo/2017/08/18/18/23/sculpture-2655931_1280.png",
  "https://cdn.pixabay.com/photo/2018/08/16/22/11/statue-3611604_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/10/05/13/37/metal-morphosis-2819439_1280.png",
];

// Item Card Data
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

const createCardData = (arr) => {
  let testData = imgList.map((imgUrl, i) => {
    return {
      id: "000000" + i,
      name: `Test Item #${(i += 1)}`,
      category: `test_item_${(i += 1)}`,
      imgUrl: imgUrl,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id libero fugit in dolore, facere, totam consequatur culpa ab voluptas deserunt aliquid molestiae labore perferendis? Blanditiis eius repellat nam sapiente. Esse.",
      liked: true,
      createdDate: "7/21/2021",
      price: 299.99,
      likes: 435,
      qtySold: 20,
    };
  });
  return testData;
};

let cardData = createCardData(imgList);

export { cardData };
