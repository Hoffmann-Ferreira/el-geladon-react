import "./style.css";
import { toast } from "react-hot-toast";

const Card = ({ iceCream }) => {
  return (
    <div className="card-Paletas">
      <h3>{iceCream.sabor}</h3>
      <p>{`R$${iceCream.preco.toFixed(2)}`}</p>
      <p className="description">{iceCream.descricao}</p>
      <img src={iceCream.foto} alt={`Paleta sabor ${iceCream.sabor}`} />
      <div className="buttons">
        <button onClick={() => toast.error("Sessão em desenvolvimento")}>
          Editar
        </button>
        <button onClick={() => toast.error("Sessão em desenvolvimento")}>
          Apagar
        </button>
      </div>
    </div>
  );
};

export default Card;
