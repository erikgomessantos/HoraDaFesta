import "../../App.css";
import "../Suppliers/Suppliers.css";
import { Link } from "react-router-dom";

import { UserFetchParties } from "../../hooks/UserFetchParties";
import { useAuthValue } from "../../context/AuthContext";

import { UserDeleteParty } from "../../hooks/UserDeleteParty";

const Suppliers = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    const {documents: suppliers, loading} = UserFetchParties("suppliers", null, uid);

    const {deleteDocument} = UserDeleteParty("suppliers");

    return (
        <div className="suppliers cntr">
            <h2>Fornecedores</h2>
            <p>Cadastre seus Fornecedores preferidos!</p>
            <Link to={"/suppliers/create"}>
                <button className="btn">Cadastrar</button>
            </Link>

            {loading && <p>Carregando...</p>}

            <div className="suppliers_header">   
                <div className="table_suppliers">
                    <span className="span_suppliers-responsive">Nome do Fornecedor</span>
                    <span className="span_suppliers-responsive">CNPJ/CPF</span>    
                    <span className="span_suppliers-responsive">Contato</span>
                    <span className="span_suppliers-responsive">Serviço</span>
                </div>
                <div className="suppliers_font-size">
                    <span>Ações</span>
                </div>    
            </div>

            {suppliers && suppliers.map((suppliers) => <div key={suppliers.id} suppliers={suppliers} className="suppliers_row">
                
                <div className="table_suppliers">
                    <p>{suppliers.name}</p>
                    <p>{suppliers.cnpjorcpf}</p>
                    <p>{suppliers.contact}</p>
                    <p>{suppliers.service}</p>
                </div>
                
                <div className="suppliers_responsive">
                    <Link to={"/dashboard"} className="suppliers_btn suppliers_btn-outline">
                        Adicionar à Festa
                    </Link>
                    <Link to={`/suppliers/edit/${suppliers.id}`} className="suppliers_btn suppliers_btn-outline">
                        Editar
                    </Link>
                    <button onClick={() => deleteDocument(suppliers.id)} className="suppliers_btn suppliers_btn-outline suppliers_btn-danger">
                        Excluir
                    </button>
                </div>   
            </div>)}
        </div>
    );
};

export default Suppliers;