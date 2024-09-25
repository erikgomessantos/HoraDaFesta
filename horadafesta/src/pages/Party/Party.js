import "../Party/Party.css";
import { useParams } from "react-router-dom";
import { UserFetchParty } from "../../hooks/UserFetchParty";

import { ExportCSV } from "../../components/ExportCSV";

const Party = () => {
    const {id} = useParams();
    const {document: party, loading} = UserFetchParty("parties", id);
    let viewers = [];
    
    if(party) {
         viewers = [
            {   Título: party.title,
                Nome: Array.isArray(party.name) ? party.name.join(', ') : party.name,
                Atrações: Array.isArray(party.attractionsName) ? party.attractionsName.join(', ') : party.attractionsName,
                Tarefas: Array.isArray(party.tasksDescription) ? party.tasksDescription.join(', ') : party.tasksDescription,
                Local: Array.isArray(party.places) ? party.places.join(', ') : party.places,
                Fornecedores: Array.isArray(party.suppliers) ? party.suppliers.join(', ') : party.suppliers
            }
        ]
    };

    return (
        <div className="party_container">
            {loading && <p>Carregando festa...</p>}
            {party && (
                <>
                    <h1>Nome da festa: {party.title}</h1>
                    <img src={party.image}  alt={party.title}/>
                    <div>
                        <p>Lista de Contatos: {Array.isArray(party.name) ? party.name.join(', ') : party.name}</p>
                    </div>
                    <div>
                        <p>Atrações: {Array.isArray(party.attractionsName) ? party.attractionsName.join(', ') : party.attractionsName}</p>
                    </div>
                    <div>
                        <p>Tarefas: {Array.isArray(party.tasksDescription) ? party.tasksDescription.join(', ') : party.tasksDescription}</p>
                    </div>
                    <div>
                        <p>Locais: {Array.isArray(party.places) ? party.places.join(', ') : party.places}</p>
                    </div>
                    <p>Fornecedores: {party.suppliers}</p>
                    <p className="createdby">Festa criada por:{party.createdBy}</p>
                    {viewers.length > 0 && (
                        <ExportCSV csvData={viewers} fileName={party.title} />
                    )}    
                </>
            )}
        </div>
    );
};

export default Party;