import { useState, useEffect } from "react";

const Navbar = ({ updatePlanetId }) => {

  const [planetId, setPlanetId] = useState(1);

  useEffect(() => {
    updatePlanetId(planetId);
  }, [planetId]);

  return (
    <header className="headerStyles">
      <nav className="headerContainer">
        <div className="headerLogo">
          <h1>THE PLANETS</h1>
        </div>
        <div className="headerLinks">
          <ul>
            <li className="mercuryNav">
              <a href="#" onClick={() => setPlanetId(1)}>
                Mercury
              </a>
            </li>
            <li className="venusNav">
              <a href="#" onClick={() => setPlanetId(2)} >
                Venus
              </a>
            </li>
            <li className="earthNav">
              <a href="#" onClick={() => setPlanetId(3)} >
                Earth
              </a>
            </li>
            <li className="marsNav">
              <a href="#" onClick={() => setPlanetId(8)} >
                Mars
              </a>
            </li>
            <li className="jupiterNav">
              <a href="#" onClick={() => setPlanetId(7)} >
                Jupiter
              </a>
            </li>
            <li className="saturnNav">
              <a href="#" onClick={() => setPlanetId(5)} >
                Saturn
              </a>
            </li>
            <li className="uranusNav">
              <a href="#" onClick={() => setPlanetId(4)} >
                Uranus
              </a>
            </li>
            <li className="neptuneNav">
              <a href="#" onClick={() => setPlanetId(6)} >
                Neptune
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
