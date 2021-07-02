import Navbar from "./components/Navbar"
import Card from "./components/Card";

function App() {
  const testArray = ["red", "green", "blue", "orange", "purple"];
  let result = testArray.map((bgColor, index) => (
    <Card key={index} bgColor={bgColor} />
  ));
  return <div className="app">
  <Navbar/>
  {result}</div>;
}

export default App;
