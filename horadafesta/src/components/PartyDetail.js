import "../components/PartyDetail.css";
import { Link } from "react-router-dom";

const PartyDetail = ({ party }) => {
    return (
        <div className="party_detail">
            <img src={party.image} alt={party.title}/>
            <h2>Nome da festa: {party.title}</h2>
            {/* <p>Lista de Contatos: {party.name}</p> */}
            <div>
                <p>Lista de Contatos: {Array.isArray(party.name) ? party.name.join(', ') : party.name}</p>
            </div>
            <div>
                <p>Atrações: {Array.isArray(party.attractionsName) ? party.attractionsName.join(', ') : party.attractionsName}</p>
            </div>
            <div>
                <p>Tarefas: {Array.isArray(party.tasksDescription) ? party.tasksDescription.join(', ') : party.tasksDescription}</p>
            </div>
            <p>Local: {party.places}</p>
            <div>
                <p>Fornecedores: {Array.isArray(party.suppliers) ? party.suppliers.join(', ') : party.suppliers}</p>
            </div>
            <p className="createdby">Festa criada por: {party.createdBy}</p>
            <Link to={`/party/${party.id}`} className="btn btn-outline">
                Ver Festa Individual           
            </Link>
        </div>
    )
};

export default PartyDetail;