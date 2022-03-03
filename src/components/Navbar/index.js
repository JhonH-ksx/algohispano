import { useContext, useEffect, useState } from "react";
import Logo from "components/Logo";
import ButtonTurnTheme from "components/Navbar/ButtonTurnTheme";
import ListOfLinks from "components/Navbar/ListOfLinks";
import Social from "components/Navbar/Social";
import { NavbarContrastContext } from "context/NavbarContrastContext";
import { useScroll } from "hooks/useScroll";

function Navbar() {
  const isInContrast = useScroll({ initPos: false, maxLimitInPos: 0 });
  const {isNavbarContrast, setIsNavbarContrast} = useContext(NavbarContrastContext);
  const [mobileLinkActive, setMobileLinkActive] = useState(false); // helper for mobile

  useEffect(() => {
    setIsNavbarContrast(isInContrast);
  }, [isInContrast, setIsNavbarContrast]);

  return (
    <nav className={`navbar ${isNavbarContrast ? 'navbar--crazy' : ''}`} id="#">
      <button
        className={`navbar__links-mobile__btn ${mobileLinkActive ? 'opposite-color' : ''}`}
        onClick={() => setMobileLinkActive(prev => !prev)}
        hidden
      >  <i className="fa-solid fa-bars" /> </button>

      <ul className={`navbar__links navbar__links-mobile--${mobileLinkActive ? 'show' : 'hide'}`}>
        <Logo />
        <ListOfLinks />
      </ul>

      <div className="navbar__extra">
        <Social />
        <ButtonTurnTheme />
      </div>
    </nav>
  )
}

export default Navbar;