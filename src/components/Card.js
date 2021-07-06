import {
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
  AddShoppingCart as AddShoppingCartIcon,
  RemoveShoppingCart as RemoveShoppingCartIcon
} from "@material-ui/icons";
import "../styles/card.css";

export default function Card({ imgUrl }) {
  console.log(imgUrl);
  return (
    <div
      className="card"
      style={{ background: `url(${imgUrl}) no-repeat center center fixed` }}
    >
      <div className="card-body">
        <div className="title-container">
          <h1 className="card-title">Title</h1>
        </div>
      </div>
      <div className="description-section">
        <h4>Description</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          totam eum earum vero enim qui culpa commodi natus sit iste, aperiam
          debitis omnis nisi, sapiente aliquam saepe voluptatibus. Rerum,
          necessitatibus.
        </p>
        <div className="card-footer">
          <div className="card-footer-icon-container">
            <FavoriteIcon style={{ color: "red" }} />
            {/* <FavoriteBorderIcon className="card-footer-icon" /> */}
            <AddShoppingCartIcon className="card-footer-icon" />
            {/* <RemoveShoppingCartIcon /> */}
          </div>
          <small className="muted-text">Created: 03/24/2020</small>
        </div>
      </div>
    </div>
  );
}
