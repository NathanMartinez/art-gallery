import MobileNavbar from "./components/MobileNavbar";
import ContentContainer from "./components/ContentContainer";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/app.css";

function App() {
  return (
    <Router>
      <div className="app">
        <ContentContainer />
        <MobileNavbar />
      </div>
    </Router>
  );
}

export default App;
