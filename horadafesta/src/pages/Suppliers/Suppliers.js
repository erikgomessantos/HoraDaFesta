import "../Contacts/Contacts.css";
import { Link } from "react-router-dom";

import { UserFetchParties } from "../../hooks/UserFetchParties";
import { useAuthValue } from "../../context/AuthContext";

const Suppliers = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    const {documents: suppliers, loading} = UserFetchParties("suppliers", null, uid);


    return (
        <div className="create_contact">
            <h2>Fornecedores</h2>
            <p>Cadastre seus Fornecedores preferidos!</p>
            <Link to={"/suppliers/create"}>
                <button className="btn">Cadastrar</button>
            </Link>

            {loading && <p>Carregando...</p>}

            {suppliers && suppliers.map((suppliers) => <p key={suppliers.id} suppliers={suppliers}>
                <span>Nome:{suppliers.name}</span>
                <span>CPF ou CNPJ:{suppliers.cnpjorcpf}</span>
                <span>Contato:{suppliers.contact}</span>
                <span>Serviço:{suppliers.service}</span>
                <Link to={"/dashboard"}>
                    <button className="btn">Adicionar à Festa</button>
                </Link>
            </p>)}

            {suppliers && suppliers.length === 0 && (
                <div className="noparties">
                    <p>Ainda não foram cadastrados Fornecedores</p>
                    <Link to="/suppliers/create" className="btn">Cadastrar</Link>
                </div>
            )}

            {/* 
            <Link to={"/suppliers/create"}>
                <button className="btn">Cadastrar</button>
            </Link> */}
        </div>
    );
};

export default Suppliers;