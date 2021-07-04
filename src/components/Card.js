import Box from "@material-ui/core/Box";
import "../styles/card.css";

export default function Card({ bgColor }) {
  return (
    <Box className="card" style={{ background: bgColor }}>
      <div className="card-body">
        <h2 className="card-title">Art Title</h2>
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
    </Box>
  );
}
