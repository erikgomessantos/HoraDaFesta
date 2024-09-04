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
                    <h1>Nome da festa: {party.title}</h1>
                    <img src={party.image}  alt={party.title}/>
                    <p>Lista de Contatos:{party.name}</p>
                    <p className="createdby">Festa criada por:{party.createdBy}</p>
                </>
            )}
        </div>
    );
};

export default Party;