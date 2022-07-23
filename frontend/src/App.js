import "./App.css";
import Navbar from "./Components/NavbarComponent";
import "@fontsource/antonio";
import "@fontsource/spartan";
import "@fontsource/spartan/600.css";
import PlanetFacts from "./Components/PlanetComponent";

function App() {
  return (
    <div>
      <Navbar />
      <PlanetFacts />
    </div>
  );
}

export default App;
