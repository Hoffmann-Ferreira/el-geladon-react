import "./style.css";
import logo from "../../assets/icons/logo.svg";
import sacola from "../../assets/icons/sacola.png";
import {toast} from "react-hot-toast";
import ModalNewIceCream from "../Modals/NewIceCream";
import { useState } from "react";

const Header = () => {
  const [displayModalCreate, setDisplayModalCreate] = useState(false);

  const handleDisplayModalCreate = () => {
    setDisplayModalCreate(!displayModalCreate)
  }



  return (
  <>
    <header>
      <div className="cabecalho">
        <img className="img-geladon" src={logo} alt="Logo El Geladon" />
        <h2> El Geladon </h2>
        <img className="sacola" src={sacola} alt="Logo de uma socola" onClick={() => toast.error("sessão em desenvolvimento")} />
        <button onClick={handleDisplayModalCreate} className="botao-Adicionar">Adcionar paleta</button>
      </div>
    </header>
    {displayModalCreate && <ModalNewIceCream closeModal = {handleDisplayModalCreate}/>}
  </>
  );
};

export default Header;
