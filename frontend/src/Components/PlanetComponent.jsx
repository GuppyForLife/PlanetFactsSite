import 'animate.css';
import { useState } from 'react';
import PlanetFacts from './PlanetFactsComponent';

const Planet = () => {

  const [planet, setPlanet] = useState("Mercury")

  return (
    <div>
      <PlanetFacts />
      <div className="planetFactsBottom">
        <div className="planetFactsBottomBox">
            <p>ROTATION TIME</p>
            <h2>58.6 DAYS</h2>
        </div>
        <div className="planetFactsBottomBox">
            <p>REVOLUTION TIME</p>
            <h2>87.97 Days</h2>
        </div>
        <div className="planetFactsBottomBox">
            <p>RADIUS</p>
            <h2>2,439.7 KM</h2>
        </div>
        <div className="planetFactsBottomBox">
            <p>AVERAGE TEMP.</p>
            <h2>430&deg;C</h2>
        </div>
      </div>
    </div>
  );
};

export default Planet;