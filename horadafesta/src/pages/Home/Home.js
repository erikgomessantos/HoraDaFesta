import "../Home/Home.css";
import { UserFetchParties } from "../../hooks/UserFetchParties";
import PartyDetail from "../../components/PartyDetail";
import { useAuthValue } from "../../context/AuthContext";

const Home = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    const {documents: parties, loading} = UserFetchParties("parties", null, uid);
    return (
        <div className="home">
            <div>
                {loading && <p>Carregando...</p>}
                {parties && parties.map((party) => <PartyDetail key={party.id} party={party}/>)}
                {parties && parties.length === 0 && (
                    <div className="noparties">
                        <h2>Olá {user.displayName}</h2>
                        <p>Seja bem vindo(a) ao Hora Da Festa</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;