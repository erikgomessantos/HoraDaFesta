import "../Contacts/Contacts.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { UserInsert } from "../../hooks/UserInsert";

const CreateAttraction = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [formError, setFormError] = useState("");
    
    const {user} = useAuthValue();
    const {insertDocument, response} = UserInsert("attractions");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
         e.preventDefault();
         setFormError("");

        // URL Validation
        try {

            new URL(image)

        } catch (error) {
            
            setFormError("A imagem precisa ser uma URL.")
        };

        // Verificar todos os valores
          if(formError) return;

        insertDocument({
        name,
        image,
        uid: user.uid,
        createdBy: user.displayName
   });

    //  Redirect to home
        navigate("/attractions");
    };
    
    return (
        <div className="create_contact">
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
                    <span>URL da Imagem:</span>
                    <input type="text"
                        name="image"
                        placeholder="Insira o endereço da imagem que tem a sua atração"
                        onChange={(e) => setImage(e.target.value)}
                        value={image}  
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