import logoImg from 'assets/Logo.png';
import { useContext, useEffect, useRef } from "react";
import { NavbarContrastContext } from "context/NavbarContrastContext";


function Logo() {
  const {isNavbarContrast} = useContext(NavbarContrastContext);
  const visibility = useRef();

  useEffect(() => {
    if (isNavbarContrast) {
      visibility.current.style.visibility = 'visible';
      visibility.current.classList.add("rotateIn");
    } else {
      visibility.current.style.visibility = 'hidden';
      visibility.current.classList.remove("rotateIn");
    }
  }, [isNavbarContrast]);

  return (
    <a
      href="/#"
      ref={visibility}
      className="navbar__logo-container"
    >
      <img 
        src={logoImg}
        className="navbar__logo-container__logo"
        alt="logo"
      />
    </a>    
  )
}


export default Logo;