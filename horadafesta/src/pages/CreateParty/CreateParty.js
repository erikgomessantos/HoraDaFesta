import "../CreateParty/CreateParty.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { UserInsert } from "../../hooks/UserInsert";

const CreateParty = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [attractionsName, setAttractionsName] = useState("");
    const [tasksDescription, setTasksDescription] = useState("");
    const [places, setPlaces] = useState("");
    const [suppliers, setSuppliers] = useState("");
    const [formError, setFormError] = useState("");
    
    const {user} = useAuthValue();

    const {insertDocument, response} = UserInsert("parties");
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
            title,
            image,
            attractionsName,
            tasksDescription,
            places,
            suppliers,
            uid: user.uid,
            createdBy: user.displayName
        })

        // Redirect to home
        navigate("/");
    };
    
    return (
        <div className="create_party">
            <h2>Criar Festa</h2>
            <p>Crie suas festas da forma que preferir!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título:*</span>
                    <input type="text"
                        name="title"
                        placeholder="Título da sua Festa"
                        required 
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}  
                    />
                </label>
                <label>
                    <span>URL da Imagem:*</span>
                    <input type="text"
                        name="image"
                        placeholder="Insira o endereço da imagem que tem a sua festa"
                        required 
                        onChange={(e) => setImage(e.target.value)}
                        value={image}  
                    />
                </label>
                <label>
                    <span>Atrações:</span>
                    <input type="text"
                        name="attractionsName"
                        placeholder="Descreva suas atrações"
                        onChange={(e) => setAttractionsName(e.target.value)}
                        value={attractionsName}  
                    />
                </label>
                <label>
                    <span>Tarefas:</span>
                    <input type="text"
                        name="tasksDescription"
                        placeholder="Descreva suas tarefas para que não esqueça de nada"
                        onChange={(e) => setTasksDescription(e.target.value)}
                        value={tasksDescription}  
                    />
                </label>
                <label>
                    <span>Locais:</span>
                    <input type="text"
                        name="places"
                        placeholder="Cadastre seus lugares favoritos para comemorar suas festas"
                        onChange={(e) => setPlaces(e.target.value)}
                        value={places}  
                    />
                </label>
                <label>
                    <span>Fornecedores:</span>
                    <input type="text"
                        name="suppliers"
                        placeholder="Cadastre seus fornecedores"
                        onChange={(e) => setSuppliers(e.target.value)}
                        value={suppliers}  
                    />
                </label>
                {!response.loading && <button className="btn">Criar Festa</button>}
                {response.loading && (
                    <button className="btn" disabled>
                        Aguarde.. .
                    </button>
                )}
                {(response.error || formError) && (
                    <p className="error">{response.error || formError}</p>
                )}
            </form>
        </div>
    );
};

export default CreateParty;