import { useState } from "react";

const PlanetFacts = () => {
  return (
    <div>
      <div className="planetFacts">
        <img src={require("../assets/planet-mercury.svg").default} />
        <div className="planetFactsContent">
          <h1>MERCURY</h1>
          <p>
            Mercury is the smallest planet in the Solar System and the closest
            to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
            shortest of all the Sun's planets. Mercury is one of four
            terrestrial planets in the Solar System, and is a rocky body like
            Earth.
          </p>
          <p className="planetFactsLink">
            Source:{" "}
            <a
              href="https://en.wikipedia.org/wiki/Mercury_(planet)"
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

export default PlanetFacts;
//frontend/src/Components/PlanetComponent.jsx
//frontend/src/assets/planet-earth-internal.svg
