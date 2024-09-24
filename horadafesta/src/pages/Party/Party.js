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
            {Título: party.title, Nome: Array.isArray(party.name) ? party.name.join(', ') : party.name, Atrações: Array.isArray(party.attractionsName) ? party.attractionsName.join(', ') : party.attractionsName, Tarefas: party.tasksDescription, Local: party.places, Fornecedores: party.suppliers}
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
                        <p>Atrações:{Array.isArray(party.attractionsName) ? party.attractionsName.join(', ') : party.attractionsName}</p>
                    </div>
                    
                    <p>Tarefas/Lembretes: {party.tasksDescription}</p>
                    <p>Local: {party.places}</p>
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