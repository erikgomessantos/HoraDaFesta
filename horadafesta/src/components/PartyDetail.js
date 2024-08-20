import "../components/PartyDetail.css";
import { Link } from "react-router-dom";

const PartyDetail = ({ party }) => {
    return (
        <div className="party_detail">
            <img src={party.image} alt={party.title}/>
            <h2>{party.title}</h2>
            <p className="createdby">{party.createdBy}</p>
            <Link to={`/parties/${party.id}`} className="btn btn-outline">
                Ver            
            </Link>
        </div>
    )
};

export default PartyDetail;