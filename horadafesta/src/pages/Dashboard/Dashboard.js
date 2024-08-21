import "../Dashboard/Dashboard.css";

import { Link } from "react-router-dom";

// Hooks
import { useAuthValue } from "../../context/AuthContext";
import { UserFetchParties } from "../../hooks/UserFetchParties";

const Dashboard = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    // User parties
    const {documents: parties, loading} = UserFetchParties("parties", null, uid);

    const deleteParty = (id) => {

    };

    if(loading) {
        return <p>Carregando</p>
    }

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
                    <div>
                        <Link to={`/party/${party.id}`} className="btn btn-outline">
                            Ver
                        </Link>
                        <Link to={`/parties/edit/${party.id}`} className="btn btn-outline">
                            Editar
                        </Link>
                        <button onClick={() => deleteParty(party.id)} className="btn btn-outline btn-danger">
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