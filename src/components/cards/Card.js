import "./styles/card.css";

export default function Card({ data }) {
  const { imgUrl, imgAlt, title } = data;
  return (
    <div className="card">
      <img className="card-image" src={imgUrl} alt={imgAlt} />
      <div className="title-section">
        <h1 className="card-title">{title}</h1>
        <h2 className="card-price">$300</h2>
      </div>
      <div className="description-section">
        <div className="description">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            maxime nobis tenetur ea quod recusandae error, dolor, quia
            distinctio quibusdam magnam atque voluptatibus accusantium odit
            eaque eveniet! Dicta, fugit accusamus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nam dolor perspiciatis dignissimos
            omnis? Praesentium debitis, omnis officiis sunt placeat animi nihil
            nesciunt repellendus perspiciatis totam, veniam corrupti modi
            accusantium porro.
          </p>
        </div>
        <div className="card-info-section">Like Add to cart</div>
      </div>
    </div>
  );
}
