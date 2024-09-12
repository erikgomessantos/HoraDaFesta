import "../Contacts/Contacts.css";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { UserUpdateParty } from "../../hooks/UserUpdateParty";
import { UserFetchParty } from "../../hooks/UserFetchParty";

const EditAttractions = () => {

    const {id} = useParams();
    const {document: attractions} = UserFetchParty("attractions", id);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [formError, setFormError] = useState("");

    useEffect(() => {
        if(attractions) {
            setName(attractions.name)
            setDescription(attractions.description)
        }
    }, [attractions])

    const {user} = useAuthValue();
    const {updateDocument, response} = UserUpdateParty("attractions");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormError("");

        if(formError) return;

        const data = {
            name,
            description,
            uid: user.uid,
            createdBy: user.displayName
        };

        updateDocument(id, data);

        navigate("/attractions");
    }    

    return (
        <div className="create_contact">
            <h2>Editar Atração</h2>
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
                {!response.loading && <button className="btn">Editar</button>}
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

export default EditAttractions;