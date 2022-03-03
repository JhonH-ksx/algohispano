import { createContext, useState } from "react"
import PropTypes from 'prop-types';

export const NavbarContrastContext = createContext();

function NavbarContrastProvider({ children }) {
  const [isNavbarContrast, setIsNavbarContrast] = useState(false);
  const value = {isNavbarContrast, setIsNavbarContrast};

  return (
    <NavbarContrastContext.Provider value={value}>
      {children}
    </NavbarContrastContext.Provider>
  )
}

NavbarContrastProvider.propTypes = {
  chidlren: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ])
};

export default NavbarContrastProvider;
