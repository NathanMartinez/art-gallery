import {
  Favorite as FavoriteIcon,
  AddShoppingCart as AddShoppingCartIcon,
} from "@material-ui/icons";

import "../styles/card.css";

export default function FavoritesCard({
  data: { name, imgUrl, description, liked, createdDate, price },
}) {
  return (
    <div
      className="card"
      style={{ background: `url(${imgUrl}) no-repeat center center fixed` }}
    >
      <div className="card-body">
        <div className="title-container">
          <h1 className="card-title">{name}</h1>
          <h3>${price}</h3>
        </div>
      </div>
      <div className="description-section">
        <h4>Description</h4>
        <p>{description}</p>
        <div className="card-footer">
          <div className="card-footer-icon-container">
            <FavoriteIcon className={liked ? "liked" : null} />
            <AddShoppingCartIcon className="card-footer-icon" />
          </div>
          <small className="muted-text">Created: {createdDate}</small>
        </div>
      </div>
    </div>
  );
}
