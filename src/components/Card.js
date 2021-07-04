import "../styles/card.css";

export default function Card({ imgUrl }) {
  console.log(imgUrl);
  return (
    <div className="card" style={{ background: `url(${imgUrl}) no-repeat center center fixed` }}>
      <div className="card-body">
        <h1 className="card-title">Title</h1>
      </div>
      <div className="description-section">
        <h4>Description</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          totam eum earum vero enim qui culpa commodi natus sit iste, aperiam
          debitis omnis nisi, sapiente aliquam saepe voluptatibus. Rerum,
          necessitatibus.
        </p>
      </div>
    </div>
  );
}
