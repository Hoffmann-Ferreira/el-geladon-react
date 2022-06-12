import './style.css';
import toast from 'react-hot-toast';

const ModalDeleteIceCream = ({closeModal, iceCream, getIceCream }) => {
    const handleDeleteIceCream = async () => {
        const response =  await fetch(`http://localhost:3005/paletas/excluir-paleta/${iceCream._id}`, 
        {
            method: "Delete",
            mode: "cors"
        }
        );
        if(response.status !== 200){
            return toast.error("Erro na exclusão da paleta");
        } 

        closeModal();
        getIceCream()
        toast.success("Paleta Excluída com sucesso!")

    };

    return(
    <div className='box-modal'>
        <div className='box-modal-delete'>
            <h2>Deseja Excluir a Paleta de {iceCream.sabor}?</h2>
            <div>
                <button onClick={closeModal}>Não</button>
                <button onClick={handleDeleteIceCream}>Sim</button>
            </div>
        </div>
    </div>
    )
}

export default ModalDeleteIceCream