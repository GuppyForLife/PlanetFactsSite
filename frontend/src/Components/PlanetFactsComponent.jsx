const PlanetFacts = ({planet}) => {
    return(
  <div className="planetFacts">
    <img
      className="animate__animated animate__zoomInUp"
      src={require(`../assets/planet-mercury.svg`).default}
      alt="Mercury"
    />
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
