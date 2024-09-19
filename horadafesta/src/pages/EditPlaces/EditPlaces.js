import "../../App.css";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { UserUpdateParty } from "../../hooks/UserUpdateParty";
import { UserFetchParty } from "../../hooks/UserFetchParty";

const EditPlaces = () => {

    const {id} = useParams();
    const {document: places} = UserFetchParty("places", id);

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [neighbor, setNeighbor] = useState("");
    const [number, setNumber] = useState("");
    const [formError, setFormError] = useState("");

    useEffect(() => {
        if(places) {
            setName(places.name)
            setAddress(places.address)
            setNeighbor(places.neighbor)
            setNumber(places.number)
        }
    }, [places])

    const {user} = useAuthValue();
    const {updateDocument, response} = UserUpdateParty("places");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormError("");

        if(formError) return;

        const data = {
            name,
            address,
            neighbor,
            number,
            uid: user.uid,
            createdBy: user.displayName
        };

        updateDocument(id, data);

        navigate("/places");
    }  

    return (
        <div className="create_contact">
            <h2>Editar Local</h2>
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

export default EditPlaces;