import { NavbarContrastContext } from 'context/NavbarContrastContext';
import { useContext } from 'react';

function Link({ path, title }) {
  const {isNavbarContrast} = useContext(NavbarContrastContext);
  
  return (
    <a
      href={path}
      className={`navbar__links__item ${isNavbarContrast ? 'opposite-color' : ''}`}
    >{title}</a>
  )
};

export default Link;
