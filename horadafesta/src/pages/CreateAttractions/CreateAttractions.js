import "../../App.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { UserInsert } from "../../hooks/UserInsert";

const CreateAttraction = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [formError, setFormError] = useState("");
    
    const {user} = useAuthValue();
    const {insertDocument, response} = UserInsert("attractions");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
         e.preventDefault();
         setFormError("");

        // Verificar todos os valores
          if(formError) return;

        insertDocument({
        name,
        description,
        uid: user.uid,
        createdBy: user.displayName
   });

    //  Redirect to home
        navigate("/attractions");
    };
    
    return (
        <div className="create_forms">
            <h2>Criar Atrações</h2>
            {<form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:*</span>
                    <input type="text"
                        name="name"
                        placeholder="Nome da atração"
                        required 
                        onChange={(e) => setName(e.target.value)}
                        value={name}  
                    />
                </label>
                <label>
                    <span>Descrição:</span>
                    <input type="text"
                        name="description"
                        placeholder="Descreva sua atração da forma que desejar"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}  
                    />
                </label>
                {!response.loading && <button className="btn">Criar</button>}
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

export default CreateAttraction;