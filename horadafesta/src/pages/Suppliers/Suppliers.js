import "../Contacts/Contacts.css";
import { Link } from "react-router-dom";

const Suppliers = () => {
    return (
        <div className="create_contact">
            <h2>Fornecedores</h2>
            <p>Cadastre seus Fornecedores preferidos!</p>
            <Link to={"/suppliers/create"}>
                <button className="btn">Cadastrar</button>
            </Link>
        </div>
    );
};

export default Suppliers;