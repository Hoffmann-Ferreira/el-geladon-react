import Card from "../Card";
import { useState, useEffect } from "react";

const Main = () => {
    const [iceCream, setIceCream] = useState([]);

    const getIceCream = async () => {
        const response = await fetch("http://localhost:3005/paletas/listar-todas/");

        const iceCreamList = await response.json();
         
        console.log("fez requisição");
        setIceCream(iceCreamList);

    };

    useEffect(() =>{
        getIceCream();
    }, []);

    return (
        <main>
            <div>
                <h2> Lista de Paletas</h2>
            <div>
            {iceCream.map((element) =>{
                return <Card key={element._id} iceCream ={element}/>
            })}
            </div>
            </div>
        </main>
    );
};

export default Main