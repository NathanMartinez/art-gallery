import MobileNavbar from "./components/MobileNavbar";
import ContentContainer from "./components/ContentContainer";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/app.css";
import MainHeader from "./components/MainHeader";

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
