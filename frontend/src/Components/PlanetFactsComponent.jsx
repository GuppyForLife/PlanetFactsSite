const PlanetFacts = ({ planet }) => {
  

  return (
    <div className="animate__animated animate__zoomInUp">
      <div className="planetFacts">
        <object type="image/svg+xml" data={`.${planet.imagesPlanet}`}></object>
        <div className="planetFactsContent">
          <h1>{planet.name}</h1>
          <p>{planet.overviewContent}</p>
          <p className="planetFactsLink">
            Source:{" "}
            <a href="" target={"_blank"}>
              Wikipedia
            </a>
          </p>
          <button className="planetFactsButton" id="active">
            <span className="spanNum">01</span>
            <span>Overview</span>
          </button>
          <button className="planetFactsButton">
            <span className="spanNum">02</span>
            <span>Internal Structure</span>
          </button>
          <button className="planetFactsButton">
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
