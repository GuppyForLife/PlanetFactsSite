import 'animate.css';
import { useState, useEffect } from 'react';
import PlanetFacts from './PlanetFactsComponent';

const Planet = () => {

  const [ planets, setPlanets ] = useState([]);

  const getPlanets = async () => {
    const res = await fetch(`http://localhost:9000/api/planets`);
    const data = await res.json();
    const { planets } = data;
    setPlanets(planets);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <div>
      {planets[0] ? <PlanetFacts planet={planets[0]} /> : <p>Loading...</p>}
      <div className="planetFactsBottom">
        <div className="planetFactsBottomBox">
            <p>ROTATION TIME</p>
            <h2></h2>
        </div>
        <div className="planetFactsBottomBox">
            <p>REVOLUTION TIME</p>
            <h2></h2>
        </div>
        <div className="planetFactsBottomBox">
            <p>RADIUS</p>
            <h2></h2>
        </div>
        <div className="planetFactsBottomBox">
            <p>AVERAGE TEMP.</p>
           <h2></h2>
        </div>
      </div>
    </div>
  );
};

export default Planet;