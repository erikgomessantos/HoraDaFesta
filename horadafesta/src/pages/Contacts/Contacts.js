import "../Contacts/Contacts.css";
import { Link } from "react-router-dom";

import { UserFetchParties } from "../../hooks/UserFetchParties";
import { useAuthValue } from "../../context/AuthContext";

import { UserDeleteParty } from "../../hooks/UserDeleteParty";

const Contact = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    const {documents: contacts, loading} = UserFetchParties("contacts", null, uid);

    const {deleteDocument} = UserDeleteParty("contacts");
    
    return (
        <div className="contacts">
            <h2>Contatos</h2>
            <p>Cadastre seus contatos para que não esqueça de chamar ninguém para as suas festas!</p>
            <Link to={"/contacts/create"}>
                <button className="btn">Cadastrar</button>
            </Link>
           
            {loading && <p>Carregando...</p>}

            <div className="contacts_header">   
                <div className="table_contacts">
                    <span className="span_contacts-responsive">Nome</span>
                    <span className="span_contacts-responsive">Apelido</span>
                    <span className="span_contacts-responsive">E-mail</span>  
                    <span>Telefone</span>    
                </div>
                <div className="contacts_font-size">
                    <span>Ações</span>
                </div>    
            </div>

            {contacts && contacts.map((contacts) => <div key={contacts.id} contacts={contacts} className="contacts_row">
                
                <div className="table_contacts">
                    <p>{contacts.name}</p>
                    <p>{contacts.nickname}</p>
                    <p>{contacts.email}</p>
                    <p>{contacts.telephone}</p>
                </div>

                <div className="contacts_responsive">
                    <Link to={"/dashboard"} className="contacts_btn contacts_btn-outline">
                        Adicionar à Festa
                    </Link>
                    <Link to={`/contacts/edit/${contacts.id}`} className="contacts_btn contacts_btn-outline">
                        Editar
                    </Link>
                    <button onClick={() => deleteDocument(contacts.id)} className="contacts_btn contacts_btn-outline contacts_btn-danger">
                        Excluir
                    </button>
                </div>        
            </div>)}
        </div>
    );
};

export default Contact;