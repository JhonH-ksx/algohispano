import { useState } from "react";
import PropTypes from 'prop-types';
import { createContext } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('ligth');
  
  const turnTheme = () => {
    setCurrentTheme( theme => theme === 'ligth' ? 'dark' : 'ligth')
  };

  const value = { currentTheme, turnTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default ThemeProvider;