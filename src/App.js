import MobileNavbar from "./components/MobileNavbar";
import ContentContainer from "./components/ContentContainer";
import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <ContentContainer />
      <MobileNavbar />
    </div>
  );
}

export default App;
