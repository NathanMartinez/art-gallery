import { useEffect } from "react";
import ContentContainer from "./components/ContentContainer";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/app.css";
import Navbar from "../navigation/Navbar";
import Header from "../header/Header";
import NavbarEx from "../experimental/navigation/NavbarEx";

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};

window.addEventListener("resize", appHeight);
appHeight();

function App() {
  useEffect(() => {
    appHeight();
  }, []);

  return (
    <Router>
      <div className="app">
        <NavbarEx />
        {/* <Header /> */}
        <ContentContainer />
        {/* <Navbar /> */}
      </div>
    </Router>
  );
}

export default App;
