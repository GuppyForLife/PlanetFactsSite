const PlanetFacts = ({planet}) => {
    return(
  <div className="planetFacts">
    <object type="image/svg+xml" data={`.${planet.imagesPlanet}`} ></object>
    <div className="planetFactsContent">
      <h1>{planet.name}</h1>
      <p>
        {planet.overviewContent}
      </p>
      <p className="planetFactsLink">
        Source:{" "}
        <a
          href=""
          target={"_blank"}
        >
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
    );
};

export default PlanetFacts;
