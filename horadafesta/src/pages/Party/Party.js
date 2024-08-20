import "../Party/Party.css";

// Hooks
import { useParams } from "react-router-dom";
import { UserFetchParty } from "../../hooks/UserFetchParty";

const Party = () => {
    const {id} = useParams();
    const {document: party, loading} = UserFetchParty("parties", id);

    return (
        <div className="party_container">
            {loading && <p>Carregando festa...</p>}
            {party && (
                <>
                    <h1>{party.title}</h1>
                    <img src={party.image}  alt={party.title}/>
                </>
            )}
        </div>
    );
};

export default Party;