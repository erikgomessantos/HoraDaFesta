import "../EditParty/EditParty.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { UserUpdateParty } from "../../hooks/UserUpdateParty";
import { UserFetchParty } from "../../hooks/UserFetchParty";

// 04-09-2024
// import { contacts } from "../Contacts/Contacts";
// 04-09-2024


const EditParty = () => {
    const {id} = useParams();
    const {document: party} = UserFetchParty("parties", id);

    //04-09-2024
    // const {document: contacts} = UserFetchParty("contacts", id);
    //04-09-2024

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    
    //04-09-2024
    const [name, setName] = useState("");
    //04-09-2024

    const [formError, setFormError] = useState("");

    useEffect(() => {
        if(party) {

            setTitle(party.title)
            setImage(party.image)
            
            //04-09-2024
            setName(party.name)
            //04-09-2024
        }
    }, [party])
    
    const {user} = useAuthValue();
    const {updateDocument, response} = UserUpdateParty("parties");
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

        const data = {
            title,
            image,
            name,
            uid: user.uid,
            createdBy: user.displayName
        };
        
       updateDocument(id, data);

        // Redirect to home
        navigate("/dashboard");
    };
    
    return (
        <div className="edit_party">
            {party && (
                <>
                    <h2>Editar Festa</h2>
                    <p>Altere as informações das suas festas da forma que preferir!</p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Título:</span>
                            <input type="text"
                                name="title"
                                placeholder="Título da sua Festa"
                                required 
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}  
                            />
                        </label>
                        <label>
                            <span>URL da Imagem:</span>
                            <input type="text"
                                name="image"
                                placeholder="Insira o endereço da imagem que tem a sua festa"
                                required 
                                onChange={(e) => setImage(e.target.value)}
                                value={image}  
                            />
                        </label>
                        <p className="title_preview">Imagem atual:</p>
                        <img
                         className="image_preview"
                         src={party.image}
                         alt={party.title}
                        />
                        
                        {/* 04-09-2024 */}
                        <label>
                            <span>Nome do Contato:</span>
                            <input type="text"
                                name="name"
                                placeholder="Informe o nome do seu contato"
                                onChange={(e) => setName(e.target.value)}
                                value={name}  
                            />
                        </label>
                        {/* 04-09-2024 */}

                        {!response.loading && <button className="btn">Editar</button>}
                        {response.loading && (
                            <button className="btn" disabled>
                                Aguarde.. .
                            </button>
                        )}
                        {(response.error || formError) && (
                            <p className="error">{response.error || formError}</p>
                        )}
                    </form>
                </>
            )}
        </div>
    );
};

export default EditParty;