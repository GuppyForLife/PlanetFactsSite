const Navbar = () => {
  return (
    <header className="headerStyles">
      <nav className="headerContainer">
        <div className="headerLogo">
          <h1>THE PLANETS</h1>
        </div>
        <div className="headerLinks">
          <ul>
            <li>MERCURY</li>
            <li>VENUS</li>
            <li>EARTH</li>
            <li>MARS</li>
            <li>JUPITER</li>
            <li>SATURN</li>
            <li>URANUS</li>
            <li>NEPTUNE</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
