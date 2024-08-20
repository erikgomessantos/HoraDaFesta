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

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Gerencie suas festas</p>
            {parties && parties.length === 0 ? (
                <div className="noparties">
                    <p>Não foram encontradas festas</p>
                    <Link to="/parties/create" className="btn">Criar sua primeira festa</Link>
                </div>
            ) : (
                <div>
                    <p>Tem festa</p>
                </div>
            )}
            {parties && parties.map((party) => (
                <h3>{party.title}</h3>
            ))}
        </div>
    );
};

export default Dashboard;