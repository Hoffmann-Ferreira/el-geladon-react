import './style.css'
import { useState } from 'react'
import toast from 'react-hot-toast';

const ModalEditIceCream = ({closeModal, iceCream, getIceCream}) =>{
    const [sabor, setSabor] = useState(iceCream.sabor);
    const [preco, setPreco] = useState(iceCream.preco);
    const [descricao, setDescricao] = useState(iceCream.descricao);
    const [foto, setFoto] = useState(iceCream.foto);

    const hedleEditIceCream = async () => {
        const editedIceCrem = {
            sabor,
            preco,
            descricao, 
            foto
        };

        const response = await fetch(`http://localhost:3005/paletas/atualizar-paleta/${iceCream._id}`, 
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify(editedIceCrem)
        }
        );

        if(response.status !== 200){
            return toast.error("Falha ao atualizar!")
        }
        closeModal();
        getIceCream()
        toast.success("Atualização feita com sucesso!");

    };

  
    return(
        <div className='box-modal'>
            <div className="modal-container">
            <button onClick={closeModal}>Fechar</button>
        <form>
          <fieldset>
            <p>Preencha o formulário</p>

            <label>Sabor: </label>
            <input 
              value={sabor}
            onChange={(event) => setSabor(event.target.value)} 
            name = "sabor"
            required/>

            <label>Preço:</label>
            <input 
            value={preco}
            onChange={(event) => setPreco(event.target.value)} 
            type="number" 
            name = "preco"
            required/>

            <label>Descrição: </label>
            <input 
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)} 
            name = "descricao"
            required />

            <label>Foto: </label>
            <input 
            value={foto} 
            onChange={(event) => setFoto(event.target.value)} 
            name = "foto"
            required/>

            <button onClick={(hedleEditIceCream)}>Atualizar</button>
          </fieldset>
        </form>

            </div>
        </div>
    )
}

export default ModalEditIceCream

