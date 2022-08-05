import "./App.css";
import Navbar from "./Components/NavbarComponent";
import "@fontsource/antonio";
import "@fontsource/spartan";
import "@fontsource/spartan/600.css";
import PlanetFacts from "./Components/PlanetComponent";
import { useState } from "react";
import Planet from "./Components/PlanetComponent";

function App() {
  
  const [planetId, setPlanetID] = useState(1);

  const updatePlanetId = (id) => {
    setPlanetID(id);
  }

  return (
    <div>
      <Navbar updatePlanetId={updatePlanetId}/>
      <Planet planet={planetId} />
    </div>
  );
}

export default App;
