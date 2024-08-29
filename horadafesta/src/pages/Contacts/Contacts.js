import "../Contacts/Contacts.css";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="create_contact">
            <h2>Contatos</h2>
            <p>Cadastre seus contatos para que não esqueça de chamar ninguém para as suas festas!</p>
            <Link to={"/contacts/create"}>
                <button className="btn">Cadastrar</button>
            </Link>
        </div>
    );
};

export default Contact;