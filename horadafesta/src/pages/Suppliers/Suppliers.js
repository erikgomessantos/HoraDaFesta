import "../../App.css";
import { Link } from "react-router-dom";

import { UserFetchParties } from "../../hooks/UserFetchParties";
import { useAuthValue } from "../../context/AuthContext";

// 09-09-2024
import { UserDeleteParty } from "../../hooks/UserDeleteParty";
// 09-09-2024

const Suppliers = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    const {documents: suppliers, loading} = UserFetchParties("suppliers", null, uid);

    // 09-09-2024
    const {deleteDocument} = UserDeleteParty("suppliers");
    // 09-09-2024

    return (
        <div className="create_forms">
            <h2>Fornecedores</h2>
            <p>Cadastre seus Fornecedores preferidos!</p>
            <Link to={"/suppliers/create"}>
                <button className="btn">Cadastrar</button>
            </Link>

            {loading && <p>Carregando...</p>}

            {suppliers && suppliers.map((suppliers) => <p key={suppliers.id} suppliers={suppliers} className="party_row">
                <span>Nome:{suppliers.name}</span>
                <span>CPF ou CNPJ:{suppliers.cnpjorcpf}</span>
                <span>Contato:{suppliers.contact}</span>
                <span>Serviço:{suppliers.service}</span>
                <Link to={"/dashboard"} className="btn btn-outline">
                    Adicionar à Festa
                </Link>
                <Link to={`/suppliers/edit/${suppliers.id}`} className="btn btn-outline">
                    Editar
                </Link>
                <button onClick={() => deleteDocument(suppliers.id)} className="btn btn-outline btn-danger">
                    Excluir
                </button>
            </p>)}

            {/* {suppliers && suppliers.length === 0 && (
                <div className="noparties">
                    <p>Ainda não foram cadastrados Fornecedores</p>
                    <Link to="/suppliers/create" className="btn">Cadastrar</Link>
                </div>
            )} */}

            {/* 
            <Link to={"/suppliers/create"}>
                <button className="btn">Cadastrar</button>
            </Link> */}
        </div>
    );
};

export default Suppliers;