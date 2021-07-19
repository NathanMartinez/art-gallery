import {
  Favorite as FavoriteIcon,
  AddShoppingCart as AddShoppingCartIcon,
  MoreHoriz as MoreHorizIcon,
} from "@material-ui/icons";
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
        <div className="card-info-section">
          <div className="card-options">
            <FavoriteIcon className="card-icon" />
            <AddShoppingCartIcon className="card-icon" />
          </div>
          <MoreHorizIcon />
      </div>
    </div>
  );
}
