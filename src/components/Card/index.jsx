
const Card = ({iceCream}) => {
    return(
        <div className="card-Paletas">
            <h3>{iceCream.sabor}</h3>
            <p>{`R$${iceCream.preco.toFixed(2)}`}</p>
            <p>{iceCream.descricao}</p>
            <img src={iceCream.foto} alt ={`Paleta sabor ${iceCream.sabor}`}/>
            <button>Adcionar</button>
        </div>
    )
};

export default Card;