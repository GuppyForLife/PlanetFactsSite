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
            <li>
              <a href="#" onClick={() => setPlanetId(1)}>
                Mercury
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setPlanetId(2)}>
                Venus
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setPlanetId(3)}>
                Earth
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setPlanetId(4)}>
                Mars
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setPlanetId(5)}>
                Jupiter
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setPlanetId(6)}>
                Saturn
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setPlanetId(7)}>
                Uranus
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setPlanetId(8)}>
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
