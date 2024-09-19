import "../../App.css";
import { Link } from "react-router-dom";

import { UserFetchParties } from "../../hooks/UserFetchParties";
import { useAuthValue } from "../../context/AuthContext";

// 09-09-2024
import { UserDeleteParty } from "../../hooks/UserDeleteParty";
// 09-09-2024

const Attractions = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    const {documents: attractions, loading} = UserFetchParties("attractions", null, uid);

    // 09-09-2024
    const {deleteDocument} = UserDeleteParty("attractions");
    // 09-09-202

    return (
        <div className="create_forms">
            <h2>Atrações</h2>
            <p>Crie suas Atrações para que suas festas sejam inesquecíveis!</p>
            <Link to={"/attractions/create"}>
                <button className="btn">Criar</button>
            </Link>


            {loading && <p>Carregando...</p>}


            {attractions && attractions.map((attractions) => <p key={attractions.id} attractions={attractions} className="party_row">
                <span>Nome:{attractions.name}</span>
                <span>Descrição:{attractions.description}</span>
                <Link to={"/dashboard"} className="btn btn-outline">
                    Adicionar à Festa
                </Link>
                <Link to={`/attractions/edit/${attractions.id}`} className="btn btn-outline">
                    Editar
                </Link>
                <button onClick={() => deleteDocument(attractions.id)} className="btn btn-outline btn-danger">
                    Excluir
                </button>
            </p>)}
            {/* {attractions && attractions.length === 0 && (
                <div className="noparties">
                    <p>Ainda não foram criadas Atrações</p>
                    <Link to="/attractions/create" className="btn">Criar</Link>
                </div>
            )} */}

            {/* 
            <Link to={"/attractions/create"}>
                <button className="btn">Criar</button>
            </Link> */}
        </div>
    );
};

export default Attractions;