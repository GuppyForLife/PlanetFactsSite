import ReactLoading from 'react-loading';
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
      {planetInfo.singlePlanet ? <PlanetFacts planet={planetInfo.singlePlanet}/>: <div className='loader' ><ReactLoading type="spin"/><h2>Planets Incoming...</h2></div>}
    </div>
  );
};

export default Planet;