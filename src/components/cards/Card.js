import {
  Favorite as FavoriteIcon,
  AddShoppingCart as AddShoppingCartIcon,
  MoreHoriz as MoreHorizIcon,
} from "@material-ui/icons";
import "./styles/card.css";

export default function Card({ data, index }) {
  const { imgUrl, imgAlt } = data;
  return (
    <div className="card">
      <img className="card-image" src={imgUrl} alt={imgAlt} />
      <div className="title-section">
        <h3 className="card-title">Test Item #{index + 1}</h3>
        <h4 className="card-price">$300</h4>
      </div>
      <div className="card-info-section">
        <div className="card-options">
          <FavoriteIcon className="card-icon" />
          <AddShoppingCartIcon className="card-icon" />
        </div>
        <MoreHorizIcon className="card-icon" />
      </div>
    </div>
  );
}
