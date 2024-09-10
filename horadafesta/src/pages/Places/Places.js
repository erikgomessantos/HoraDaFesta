import "../Contacts/Contacts.css";
import { Link } from "react-router-dom";

import { UserFetchParties } from "../../hooks/UserFetchParties";
import { useAuthValue } from "../../context/AuthContext";

// 09-09-2024
import { UserDeleteParty } from "../../hooks/UserDeleteParty";
// 09-09-2024

const Places = () => {
    const {user} = useAuthValue();
    const uid = user.uid;

    const {documents: places, loading} = UserFetchParties("places", null, uid);
    
    // 09-09-2024
    const {deleteDocument} = UserDeleteParty("places");
    // 09-09-2024

    return (
        <div className="create_contact">
            <h2>Locais</h2>
            <p>Cadastre os locais preferidos para realizar sua festa!</p>
            <Link to={"/places/create"}>
                <button className="btn">Cadastrar</button>
            </Link>

            {loading && <p>Carregando...</p>}

            {places && places.map((places) => <p key={places.id} places={places} className="party_row">
                <span>Nome:{places.name}</span>
                <span>Endereço:{places.address}</span>
                <span>Bairro:{places.neighbor}</span>
                <span>Número:{places.number}</span>
                <Link to={"/dashboard"} className="btn btn-outline">
                    Adicionar à Festa
                </Link>
                <Link to={`/places/edit/${places.id}`} className="btn btn-outline">
                    Editar
                </Link>
                <button onClick={() => deleteDocument(places.id)} className="btn btn-outline btn-danger">
                    Excluir
                </button>
            </p>)}

            {/* {places && places.length === 0 && (
                <div className="noparties">
                    <p>Ainda não foram cadastrados Locais</p>
                    <Link to="/places/create" className="btn">Cadastrar</Link>
                </div>
            )} */}

            {/* 
            <Link to={"/places/create"}>
                <button className="btn">Cadastrar</button>
            </Link> */}
        </div>
    );
};

export default Places;