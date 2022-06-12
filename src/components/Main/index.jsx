import "./style.css";
import Card from "../Card";
import { useState } from "react";

const Main = ({ iceCream }) => {
  const [filterInput, setFilterInput] = useState("");

  return (
    <main>
      <div className="conteudo">
        <div className="Sub-titulo">
          <h2> Sabores de paletas</h2>
        </div>
        <input
          value={filterInput}
          onChange={(event) => setFilterInput(event.target.value)}
          placeholder="Digite o sabor da paleta"
        />
        <div className="container-paletas">
          {filterInput !== ""
            ? iceCream
                .filter((element) =>
                 element.sabor.toLowerCase().includes(filterInput.toLowerCase()))
                .map((element) => {
                  return <Card key={element._id} iceCream={element} />;
                })
            : iceCream.map((element) => {
                return <Card key={element._id} iceCream={element} />;
              })}
        </div>
      </div>
    </main>
  );
};

export default Main;
