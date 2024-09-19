import "../../App.css";

// 09-09-2024
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { UserUpdateParty } from "../../hooks/UserUpdateParty";
import { UserFetchParty } from "../../hooks/UserFetchParty";
// 09-09-2024

const EditContact = () => {

    // 09-09-2024
    const {id} = useParams();
    const {document: contacts} = UserFetchParty("contacts", id);

    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [formError, setFormError] = useState("");

    useEffect(() => {
        if(contacts) {

            setName(contacts.name)
            setNickname(contacts.nickname)
            setEmail(contacts.email)
            setTelephone(contacts.telephone)
        }
    }, [contacts])

    const {user} = useAuthValue();
    const {updateDocument, response} = UserUpdateParty("contacts");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");

        // Verificar todos os valores
        if(formError) return;

        const data = {
            name,
            nickname,
            email,
            telephone,
            uid: user.uid,
            createdBy: user.displayName
        };
        
       updateDocument(id, data);

        // Redireciona para a home
        navigate("/contacts");
    };

    return (
        <div className="create_forms">
            {contacts && (
                <>
                <h2>Editar Contato</h2>
            {<form onSubmit={handleSubmit}>
                    <label>
                        <span>Nome:*</span>
                        <input type="text"
                            name="name"
                            placeholder="Nome do contato"
                            required 
                            onChange={(e) => setName(e.target.value)}
                            value={name}  
                        />
                    </label>
                    <label>
                        <span>Apelido:</span>
                        <input type="text"
                            name="nickname"
                            placeholder="Apelido"
                            onChange={(e) => setNickname(e.target.value)}
                            value={nickname}  
                        />
                    </label>
                    <label>
                        <span>E-mail:*</span>
                        <input type="email"
                            name="email"
                            placeholder="Insira o e-mail do contato"
                            required 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}  
                        />
                    </label>
                    <label>
                        <span>Telefone:</span>
                        <input type="string"
                            name="telephone"
                            placeholder="(11)1234-5678"
                            onChange={(e) => setTelephone(e.target.value)}
                            value={telephone}  
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
                </>
            )}        
        </div>
    )
};

export default EditContact;