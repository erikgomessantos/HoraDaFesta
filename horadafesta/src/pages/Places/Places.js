import "../Places/Places.css";
import { Link } from "react-router-dom";

import { UserFetchParties } from "../../hooks/UserFetchParties";
import { useAuthValue } from "../../context/AuthContext";

import { UserDeleteParty } from "../../hooks/UserDeleteParty";

const Places = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    const {documents: places, loading} = UserFetchParties("places", null, uid);
    
    const {deleteDocument} = UserDeleteParty("places");

    return (
        <div className="places">
            <h2>Locais</h2>
            <p>Cadastre os locais preferidos para realizar sua festa!</p>
            <Link to={"/places/create"}>
                <button className="btn">Cadastrar</button>
            </Link>

            {loading && <p>Carregando...</p>}

            <div className="places_header">   
                <div className="table_places">
                    <span className="span_places-responsive">Nome do Espaço/Local</span>
                    <span className="span_places-responsive">Endereço</span>    
                    <span className="span_places-responsive">Bairro</span>
                    <span>Número</span>
                </div>
                <div className="places_font-size">
                    <span>Ações</span>
                </div>    
            </div>

            {places && places.map((places) => <div key={places.id} places={places} className="places_row">
                
                <div className="table_places">
                    <p>{places.name}</p>
                    <p>{places.address}</p>
                    <p>{places.neighbor}</p>
                    <p>{places.number}</p>
                </div>
                
                <div className="places_responsive">
                    <Link to={"/dashboard"} className="places_btn places_btn-outline">
                        Adicionar à Festa
                    </Link>
                    <Link to={`/places/edit/${places.id}`} className="places_btn places_btn-outline">
                        Editar
                    </Link>
                    <button onClick={() => deleteDocument(places.id)} className="places_btn places_btn-outline places_btn-danger">
                        Excluir
                    </button>
                </div>    
            </div>)}
        </div>
    );
};

export default Places;