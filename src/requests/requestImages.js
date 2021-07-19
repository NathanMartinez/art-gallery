require("dotenv").config();

const fetch = require("node-fetch");
global.fetch = fetch;

const { createApi } = require("unsplash-js");

const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
});
let result = unsplash.photos.getRandom({
  count: 10,
});

console.log(
  unsplash.photos.getRandom({
    count: 10,
  })
);
