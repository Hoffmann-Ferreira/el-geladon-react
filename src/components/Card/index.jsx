import "./style.css";
import { toast } from "react-hot-toast";
import ModalDeleteIceCream from "../Modals/DeleteIceCream";
import { useState } from "react";

const Card = ({ iceCream, getIceCream }) => {
  const [showRemoveModal, setShowRemoveModal] = useState(false)

  const handleShowRemoveModal = () => {
    setShowRemoveModal(!showRemoveModal)
  }
  return (
    <>
    <div className="card-Paletas">
      <h3>{iceCream.sabor}</h3>
      <p>{`R$${iceCream.preco.toFixed(2)}`}</p>
      <p className="description">{iceCream.descricao}</p>
      <img src={iceCream.foto} alt={`Paleta sabor ${iceCream.sabor}`} />
      <div className="buttons">
        <button  title="Deseja editar a Paleta?" onClick={() => toast.error("Sessão em desenvolvimento")}>
          Editar
        </button>
        <button  title= "Deseja apagar a Paleta?" onClick={handleShowRemoveModal}>
          Apagar
        </button>
      </div>
    </div>
    { showRemoveModal && <ModalDeleteIceCream closeModal ={handleShowRemoveModal} iceCream = {iceCream} getIceCream = {getIceCream}  />}
    </>
  );
};

export default Card;
