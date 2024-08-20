import "../Home/Home.css";

// Hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { UserFetchParties } from "../../hooks/UserFetchParties";
import PartyDetail from "../../components/PartyDetail";

const Home = () => {
    // const [query, setQuery] = useState("");
    const {documents: parties, loading} = UserFetchParties("parties");

    return (
        <div className="home">
            <h2>Veja suas festas</h2>
            <div>
                {loading && <p>Carregando...</p>}
                {parties && parties.map((party) => <PartyDetail key={party.id} party={party}/>)}
                {parties && parties.length === 0 && (
                    <div className="noparties">
                        <p>Ainda não foram criadas Festas</p>
                        <Link to="/parties/create" className="btn">Criar sua primeira Festa</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;