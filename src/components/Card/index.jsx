
const Card = ({iceCream}) => {
    return(
        <div>
            <p>{`R$${iceCream.preco.toFixed(2)}`}</p>
            <h3>{iceCream.sabor}</h3>
            <img src={iceCream.foto} alt ={`Paleta sabor ${iceCream.sabor}`}/>
        </div>
    )
};

export default Card;