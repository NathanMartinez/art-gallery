import ContentContainer from "./components/ContentContainer";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/app.css";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
document.addEventListener("resize", () => {
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
window.addEventListener("orientationchange", function (event) {
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

function App() {
  return (
    <Router>
      <div className="app">
        <ContentContainer />
      </div>
    </Router>
  );
}

export default App;
