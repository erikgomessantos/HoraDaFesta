import "../Contacts/Contacts.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuthValue } from "../../context/AuthContext";
// import { UserFetchParties } from "../../hooks/UserFetchParties";
// import { UserInsert } from "../../hooks/UserInsert";

const Contact = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [formError, setFormError] = useState("");
    
    // const {user} = useAuthValue();
    // const {insertDocument, response} = UserInsert("contacts");
    // const navigate = useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setFormError("");

    //     // Verificar todos os valores
    //      if(formError) return;

    //      insertDocument({
    //          name,
    //         email,
    //         uid: user.uid,
    //          createdBy: user.displayName
    //     })

    //     Redirect to home
    //     navigate("/");
    // };
    
    return (
        <div className="create_contact">
            <h2>Cadastrar Contatos</h2>
            <p>Cadastre seus contatos para que não esqueça de chamar ninguém para as suas festas!</p>
            {/* <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input type="text"
                        name="name"
                        placeholder="Nome do contato"
                        required 
                        onChange={(e) => setName(e.target.value)}
                        value={name}  
                    />
                </label>
                <label>
                    <span>E-mail</span>
                    <input type="email"
                        name="email"
                        placeholder="Insira o e-mail do contato"
                        required 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}  
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
            </form> */}
            <Link to={"/contacts/create"}>
                <button className="btn">Cadastrar</button>
            </Link>
        </div>
    );
};

export default Contact;