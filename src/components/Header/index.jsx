import "./style.css";
import logo from "../../assets/icons/logo.svg";
import sacola from "../../assets/icons/sacola.png";

const Header = () => {
  return (
    <header>
      <div className="cabecalho">
        <img className="img-geladon" src={logo} alt="Logo El Geladon" />
        <h2> El Geladon </h2>
        <img src={sacola} alt="Logo de uma socola" />
      </div>
    </header>
  );
};

export default Header;
