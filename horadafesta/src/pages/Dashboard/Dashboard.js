import "../Dashboard/Dashboard.css";

import { Link } from "react-router-dom";

// Hooks
import { useAuthValue } from "../../context/AuthContext";
import { UserFetchParties } from "../../hooks/UserFetchParties";
import { UserDeleteParty } from "../../hooks/UserDeleteParty";

import { ExportCSV } from "../../components/ExportCSV";

const Dashboard = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    // User parties
    const {documents: parties, loading} = UserFetchParties("parties", null, uid);

    const {deleteDocument} = UserDeleteParty("parties");

    if(loading) {
        return <p>Carregando</p>
    }

    // const fileName = "";
    const viewers = [

        {Título:1,Contatos:2,Atrações:3,Tarefas:4,Locais:5, Fornecedores:6}
    
      ]

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <p>Gerencie suas festas</p>
            {parties && parties.length === 0 ? (
                <div className="noparties">
                    <p>Não foram encontradas festas</p>
                    <Link to="/parties/create" className="btn">Criar sua primeira festa</Link>
                </div>
            ) : (
              <>
                <div className="party_header">
                    <span>Título</span>
                    <span>Ações</span>
                </div>

                {parties && parties.map((party) => <div key={party.id} className="party_row">
                    <p>{party.title}</p>
                    <div className="dashboard_responsive">
                        <Link to={`/party/${party.id}`} className="btn btn-outline">
                            Ver
                        </Link>
                        <Link to={`/parties/edit/${party.id}`} className="btn btn-outline">
                            Editar
                        </Link>
                        <Link to={`/parties/edit/${party.id}`} className="btn btn-outline">
                            Adicionar
                        </Link>
                        <ExportCSV csvData={viewers} fileName={party.title} />
                        <button onClick={() => deleteDocument(party.id)} className="btn btn-outline btn-danger">
                            Excluir
                        </button>
                    </div>
                </div>)}
              </>      
            )}
        </div>
    );
};

export default Dashboard;