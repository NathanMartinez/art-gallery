import MobileNavbar from "./components/MobileNavbar";
import ContentContainer from "./components/ContentContainer";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/app.css";
import MainHeader from "./components/MainHeader";

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

function App() {
  return (
    <Router>
      <div className="app">
        <MainHeader />
        <ContentContainer />
        <MobileNavbar />
      </div>
    </Router>
  );
}

export default App;
