import "../CreateParty/CreateParty.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { UserInsert } from "../../hooks/UserInsert";

//03-09-2024
import { UserFetchParties } from "../../hooks/UserFetchParties";
//03-09-2024

const CreateParty = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [formError, setFormError] = useState("");
    
    const {user} = useAuthValue();
    
    //03-09-2024
    const uid = user.uid;
    //03-09-2024

    const {insertDocument, response} = UserInsert("parties");
    const navigate = useNavigate();

    //03-09-2024
    const {documents: contacts} = UserFetchParties("contacts", null, uid);
    //03-09-2024

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

                
                {/* //03-09-2024 */}
                <label>
                <select>
                    <option>
                    {contacts && contacts.map((contacts) => <p key={contacts.id} contacts={contacts}>
                    <span>Nome:{contacts.name}</span>
                </p>)}
                    </option>
                
                </select>
                </label>
                {/* //03-09-2024 */}

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