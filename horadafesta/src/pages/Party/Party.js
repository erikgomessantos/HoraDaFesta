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
            {Título: party.title, Nome: party.name, Atrações: party.attractionsName, Tarefas: party.tasksDescription, Local: party.places, Fornecedores: party.suppliers}
        ]
    };

    return (
        <div className="party_container">
            {loading && <p>Carregando festa...</p>}
            {party && (
                <>
                    <h1>Nome da festa: {party.title}</h1>
                    <img src={party.image}  alt={party.title}/>
                    <p>Lista de Contatos:{party.name}</p>
                    <p>Atrações:{party.attractionsName}</p>
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