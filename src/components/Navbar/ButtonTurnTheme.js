import { useContext } from "react"
import { ThemeContext } from "context/ThemeContext"

function ButtonTurnTheme() {
  const { turnTheme } = useContext(ThemeContext);

  return (
    <div className="mid">
      <label className="rocker rocker-small">
        <input type="checkbox" onClick={turnTheme}/>
        <span className="switch-left"></span>
        <span className="switch-right"></span>
      </label>
    </div>
  )
}

export default ButtonTurnTheme