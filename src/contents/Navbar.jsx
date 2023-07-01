import "../style/Nav-Style.css";
import "../style/general.css";
import ReactLogo from "../assets/react.svg";
import PropTypes from 'prop-types';

function Navbar(props) {

  const { isDark, toggleDarkmode } = props;

    

  return (
    <nav className={isDark ? "Nav-Container dark" : "Nav-Container"}>
      <div className="Nav-Content-Container">
        <div className="Nav-item-1">
          <img src={ReactLogo} alt="React Logo" />
          <h1>ReactFacts</h1>
        </div>
        <div className="Nav-item-2">
        <span>light</span>
          <div onClick={toggleDarkmode} className={isDark ? "toggole-cont dark-toggle" : "toggole-cont"}>
            <button className={isDark ? "btn-toggle dark-button" : "btn-toggle"}>
            </button>
          </div>
          <span>dark</span>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
Navbar.propTypes = {
  isDark: PropTypes.bool,
  toggleDarkmode: PropTypes.func,
};