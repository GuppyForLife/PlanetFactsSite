import 'animate.css';
import { useState, useEffect } from 'react';
import PlanetFacts from './PlanetFactsComponent';

const Planet = ({planet}) => {

  const [ planetInfo, setPlanetInfo] = useState([]);

  const getPlanetInfo = async () => {
    const res = await fetch(`http://localhost:9000/api/planets/${planet}`);
    const data = await res.json();
    setPlanetInfo(data);
  }

  useEffect(() => {
    getPlanetInfo();
  }, [planet]);

  return (
    <div>
      {planetInfo.singlePlanet ? <PlanetFacts planet={planetInfo.singlePlanet}/>: <p>Loading...</p>}
    </div>
  );
};

export default Planet;