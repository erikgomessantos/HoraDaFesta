import "../Contacts/Contacts.css";
import { Link } from "react-router-dom";

import { UserFetchParties } from "../../hooks/UserFetchParties";
import { useAuthValue } from "../../context/AuthContext";

// 09-09-2024
import { UserDeleteParty } from "../../hooks/UserDeleteParty";
// 09-09-2024

const Contact = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    const {documents: contacts, loading} = UserFetchParties("contacts", null, uid);

    // 09-09-2024
    const {deleteDocument} = UserDeleteParty("contacts");
    // 09-09-2024
    
    return (
        <div className="create_contact">
            <h2>Contatos</h2>
            <p>Cadastre seus contatos para que não esqueça de chamar ninguém para as suas festas!</p>
            <Link to={"/contacts/create"}>
                <button className="btn">Cadastrar</button>
            </Link>

           
            {loading && <p>Carregando...</p>}

            {contacts && contacts.map((contacts) => <p key={contacts.id} contacts={contacts} className="party_row">
                <span>{contacts.name}</span>
                <span>{contacts.nickname}</span>
                <span>{contacts.email}</span>
                <span>{contacts.telephone}</span>
                <Link to={"/dashboard"} className="btn btn-outline">
                    Adicionar à Festa
                </Link>
                <Link to={`/contacts/edit/${contacts.id}`} className="btn btn-outline">
                    Editar
                </Link>
                <button onClick={() => deleteDocument(contacts.id)} className="btn btn-outline btn-danger">
                    Excluir
                </button>
            </p>)}
            {/* {contacts && contacts.length === 0 && (
                <div className="noparties">
                    <p>Ainda não foram cadastrados Contatos</p>
                    <Link to="/contacts/create" className="btn">Cadastrar</Link>
                </div>
            )} */}
            {/* 
            
            <Link to={"/contacts/create"}>
                <button className="btn">Cadastrar</button>
            </Link> */}
        </div>
    );
};

export default Contact;