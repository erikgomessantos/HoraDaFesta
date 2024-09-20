import "../Home/Home.css";

import { Link } from "react-router-dom";
import { UserFetchParties } from "../../hooks/UserFetchParties";
import PartyDetail from "../../components/PartyDetail";
import { useAuthValue } from "../../context/AuthContext";

const Home = () => {
    // const [query, setQuery] = useState("");
    // const {documents: parties, loading} = UserFetchParties("parties");
    const {user} = useAuthValue();
    const uid = user.uid;

    const {documents: parties, loading} = UserFetchParties("parties", null, uid);
    return (
        <div className="home">
            <h2>Veja suas festas</h2>
            <div>
                {loading && <p>Carregando...</p>}
                {parties && parties.map((party) => <PartyDetail key={party.id} party={party}/>)}
                {parties && parties.length === 0 && (
                    <div className="noparties">
                        <p>Ainda não foram criadas Festas</p>
                        <Link to="/party/:id" className="btn">Criar sua primeira Festa</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;