import "../components/PartyDetail.css";
import { Link } from "react-router-dom";

const PartyDetail = ({ party }) => {
    return (
        <div className="party_detail">
            <img src={party.image} alt={party.title}/>
            <h2>Nome da festa:{party.title}</h2>
            <p>Lista de Contatos:{party.name}</p>
            <p className="createdby">Festa criada por:{party.createdBy}</p>
            <Link to={`/party/${party.id}`} className="btn btn-outline">
                Ver            
            </Link>
        </div>
    )
};

export default PartyDetail;