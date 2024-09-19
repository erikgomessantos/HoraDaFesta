import "../../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { UserInsert } from "../../hooks/UserInsert";

const CreatePlaces = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [neighbor, setNeighbor] = useState("");
    const [number, setNumber] = useState("");
    const [formError, setFormError] = useState("");
    
    const {user} = useAuthValue();
    const {insertDocument, response} = UserInsert("places");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
         e.preventDefault();
         setFormError("");

        // Verificar todos os valores
          if(formError) return;

        insertDocument({
        name,
        address,
        neighbor,
        number,
        uid: user.uid,
        createdBy: user.displayName
   });

    //  Redirect to home
        navigate("/places");
    };
    
    return (
        <div className="create_contact">
            <h2>Cadastrar Local</h2>
            {<form onSubmit={handleSubmit}>
                <label>
                    <span>Nome do Espaço/Local:*</span>
                    <input type="text"
                        name="name"
                        placeholder="Nome do Espaço ou Local"
                        required 
                        onChange={(e) => setName(e.target.value)}
                        value={name}  
                    />
                </label>
                <label>
                    <span>Endereço:*</span>
                    <input type="text"
                        name="address"
                        placeholder="Endereço"
                        required 
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}  
                    />
                </label>
                <label>
                    <span>Bairro:*</span>
                    <input type="text"
                        name="neighbor"
                        placeholder="Bairro"
                        required 
                        onChange={(e) => setNeighbor(e.target.value)}
                        value={neighbor}  
                    />
                </label>
                <label>
                    <span>Número:*</span>
                    <input type="text"
                        name="number"
                        placeholder="Número"
                        required 
                        onChange={(e) => setNumber(e.target.value)}
                        value={number}  
                    />
                </label>
                {!response.loading && <button className="btn">Cadastrar</button>}
                {response.loading && (
                    <button className="btn" disabled>
                        Aguarde.. .
                    </button>
                )}
                {(response.error || formError) && (
                    <p className="error">{response.error || formError}</p>
                )}
            </form>}
        </div>
    );
};

export default CreatePlaces;