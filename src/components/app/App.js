import ContentContainer from "./components/ContentContainer";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/app.css";
import Navbar from "../navigation/Navbar";
import Header from "../header/Header";

const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <ContentContainer />
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
