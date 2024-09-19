import "../Contacts/Contacts.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { UserInsert } from "../../hooks/UserInsert";

const CreateContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [telephone, setTelephone] = useState("");
    const [formError, setFormError] = useState("");
    
    const {user} = useAuthValue();
    const {insertDocument, response} = UserInsert("contacts");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
         e.preventDefault();
         setFormError("");

        // Verificar todos os valores
          if(formError) return;

        insertDocument({
        name,
        nickname,
        email,
        telephone,
        uid: user.uid,
        createdBy: user.displayName
   });

    //  Redireciona para a home
        navigate("/contacts");
    };
    
    return (
        <div className="create_contact">
            <h2>Cadastrar Contatos</h2>
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

export default CreateContact;