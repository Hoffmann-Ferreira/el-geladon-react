import "./style.css";
import Card from "../Card";

const Main = ({iceCream}) => {
  return (
    <main>
      <div className="conteudo">
        <div className="Sub-titulo">
          <h2> Sabores de paletas</h2>
        </div>
        <div className="container-paletas">
          {iceCream.map((element) => {
            return <Card key={element._id} iceCream={element} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
