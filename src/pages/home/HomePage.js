import React from "react";
import HomeCard from "../../components/HomeCard";
import HomePageSection from "../../components/HomePageSection";

export default function HomePage() {
  const testData = [
    {
      url: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Sks4W_9Alj1v0vmgb/videoblocks-man-works-circular-saw-sparks-fly-from-hot-metal-man-hard-worked-over-the-steel-close-up-slow-motion-shot-in-garage_rb_8fxsmv__eb606aaefd05b0af745f027f927d7562__P360.mp4",
      title: "Metal Work",
      items: [],
    },
    {
      url: "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/cq8l59W/videoblocks-wood-carving-human-hands-chiseling-a-piece-of-wood_h8mlk4baqx__328aaf5bf598310d6244108ed8984435__P360.mp4",
      title: "Wood Work",
      items: [],
    },
  ];
  let result = testData.map(({ url, title }, i) => (
    <HomeCard key={i} bgVideo={url} title={title} />
  ));

  let sections = Array(3)
    .fill(0)
    .map((_, i) => <HomePageSection key={i} cards={result} />);

  return <>{sections}</>;
}
