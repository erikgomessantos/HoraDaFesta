import "../Attractions/Attractions.css";
import { Link } from "react-router-dom";

import { UserFetchParties } from "../../hooks/UserFetchParties";
import { useAuthValue } from "../../context/AuthContext";

import { UserDeleteParty } from "../../hooks/UserDeleteParty";

const Attractions = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    const {documents: attractions, loading} = UserFetchParties("attractions", null, uid);

    const {deleteDocument} = UserDeleteParty("attractions");

    return (
        <div className="attractions">
            <h2>Atrações</h2>
            <p>Crie suas Atrações para que suas festas sejam inesquecíveis!</p>
            <Link to={"/attractions/create"}>
                <button className="btn">Criar</button>
            </Link>
            {loading && <p>Carregando...</p>}

            <div className="attractions_header">
                <div className="table_attractions">
                    <span>Nome</span>
                    <span>Descrição</span>  
                </div>
                <div className="attraction_font-size">
                    <span>Ações</span>
                </div>    
            </div>

            {attractions && attractions.map((attractions) => <div key={attractions.id} attractions={attractions} className="attractions_row">
                
                <div className="table_attractions">
                    <p>{attractions.name}</p>
                    <p>{attractions.description}</p>
                </div>
                
                <div className="attractions_responsive">
                    <Link to={"/dashboard"} className="attractions_btn attractions_btn-outline">
                        Adicionar à Festa
                    </Link>
                    <Link to={`/attractions/edit/${attractions.id}`} className="attractions_btn attractions_btn-outline">
                        Editar
                    </Link>
                    <button onClick={() => deleteDocument(attractions.id)} className="attractions_btn attractions_btn-outline attractions_btn-danger">
                        Excluir
                    </button>
                </div>
            </div>)}
        </div>
    );
};

export default Attractions;