import "../Contacts/Contacts.css";
import { Link } from "react-router-dom";

import { UserFetchParties } from "../../hooks/UserFetchParties";
import { useAuthValue } from "../../context/AuthContext";

const Contact = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    const {documents: contacts, loading} = UserFetchParties("contacts", null, uid);
    
    return (
        <div className="create_contact">
            <h2>Contatos</h2>
            {loading && <p>Carregando...</p>}
            {contacts && contacts.map((contacts) => <p key={contacts.id} contacts={contacts}>
                <span>Nome:{contacts.name}</span>
                <span>Apelido:{contacts.nickname}</span>
                <span>E-mail:{contacts.email}</span>
                <span>Telefone:{contacts.telephone}</span>
                <Link to={"/contacts/create"}>
                    <button className="btn">Cadastrar</button>
                </Link>
            </p>)}
            {contacts && contacts.length === 0 && (
                <div className="noparties">
                    <p>Ainda não foram cadastrados Contatos</p>
                    <Link to="/contacts/create" className="btn">Cadastrar</Link>
                </div>
            )}
            {/* 
            <p>Cadastre seus contatos para que não esqueça de chamar ninguém para as suas festas!</p>
            <Link to={"/contacts/create"}>
                <button className="btn">Cadastrar</button>
            </Link> */}
        </div>
    );
};

export default Contact;