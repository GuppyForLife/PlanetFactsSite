import { useState, useEffect } from "react";

const PlanetFacts = ({ planet }) => {

  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');
  const [active, setActive] = useState(0);

  const handleState = () => {
    switch(active){
      case 1:
        setText(planet.structureContent);
        setLink(planet.structureSource);
        setImage(planet.imagesInternal);
        break;
      case 2:
        setText(planet.geologyContent);
        setLink(planet.geologySource);
        setImage(planet.imagesGeology);
        break;
      default:
        setText(planet.overviewContent);
        setLink(planet.overviewSource);
        setImage(planet.imagesPlanet);
        break;
    }
  }

  useEffect(() => {
    handleState();
  }, [active, planet])

  
  return (
    <div>
      <div className="planetFacts">
        <object type="image/svg+xml" data={`.${image}`}></object>
        <div className="planetFactsContent">
          <h1>{planet.name}</h1>
          <p>{text}</p>
          <p className="planetFactsLink">
            Source:{" "}
            <a href={link} target={"_blank"}>
              Wikipedia
            </a>
          </p>
          <button className="planetFactsButton" id={active === 0 ? "active" : ""} onClick={() => setActive(0)} >
            <span className="spanNum">01</span>
            <span>Overview</span>
          </button>
          <button className="planetFactsButton" onClick={() => setActive(1)} id={active === 1 ? "active" : ""}>
            <span className="spanNum">02</span>
            <span>Internal Structure</span>
          </button>
          <button className="planetFactsButton" onClick={() => setActive(2)} id={active === 2 ? "active" : ""}>
            <span className="spanNum">03</span>
            <span>Surface Geology</span>
          </button>
        </div>
      </div>
      <div className="planetFactsBottom">
        <div className="planetFactsBottomBox">
            <p>ROTATION TIME</p>
            <h2>{ planet.rotation }</h2>
        </div>
        <div className="planetFactsBottomBox">
            <p>REVOLUTION TIME</p>
            <h2>{ planet.revolution }</h2>
        </div>
        <div className="planetFactsBottomBox">
            <p>RADIUS</p>
            <h2>{ planet.radius }</h2>
        </div>
        <div className="planetFactsBottomBox">
            <p>AVERAGE TEMP.</p>
           <h2>{ planet.temperature }</h2>
        </div>
      </div>
    </div>
  );
};

export default PlanetFacts;
