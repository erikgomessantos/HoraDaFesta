import partyFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useToast from "../hook/useToast";
import "./Form.css";

const EditParty = () => {

    const {id} = useParams();
    const [party, setParty] = useState(null);
    const [services, setServices] = useState([]);

    // Load Services
    useEffect(() => {
        
        const loadServices = async () => {
            
            const res = await partyFetch.get("/services");
            
            setServices(res.data);

            loadParty();
        };

        const loadParty = async() => {
            const res = await partyFetch.get(`/parties/${id}`);
        
            console.log(res.data);
        
            setParty(res.data);
           }; 

        loadServices();
    }, []);

    const updateParty = (e) => {
        e.preventDefault();
    }

    if (!party) return <p>Carregando...</p>;

    return (
    <div className="form-page">
        <h2>Editando: {party.title}</h2>
        <p>Ajuste as informações da sua Festa</p>
        <form onSubmit={(e) => updateParty(e)}>
            <label>
                <span>Nome da Festa:</span>
                <input type="text" placeholder="Seja Criativo..." required onChange={(e) => setTitle(e.target.value)}value={party.title}/>
            </label>
            <label>
                <span>Anfitrião:</span>
                <input type="text" placeholder="Quem está dando a Festa?" required onChange={(e) => setAuthor(e.target.value)}value={party.author}/>
            </label>
            <label>
                <span>Descrição:</span>
                <textarea placeholder="Conte mais sobre a Festa..." required onChange={(e) => setDescription(e.target.value)}value={party.description}></textarea>
            </label>
            <label>
                <span>Orçamento:</span>
                <input type="number" placeholder="Quanto você pretende Investir?" required onChange={(e) => setBudget(e.target.value)}value={party.budget}/>
            </label>
            <label>
                <span>Imagem:</span>
                <input type="text" placeholder="Insira a URL de uma Imagem" required onChange={(e) => setImage(e.target.value)}value={party.image}/>
            </label>
            <div>
                <h2>Escolha os serviços</h2>
                <div className="services-container">
                    {services.length === 0 && <p>Carregando...</p>}
                    {services.length > 0 && services.map((service) => (
                        <div className="service" key={service.id}>
                            <img src={service.image} alt={service.name}/>
                            <p className="service-name">{service.name}</p>
                            <p className="service-price">R${service.price}</p>
                            <div className="checkbox-container">
                                <input type="checkbox" value={service._id} onChange={(e) => handleServices(e)} />
                                <p>Marque para solicitar</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <input type="submit" value="Criar Festa" className="btn" />
        </form>
    </div>)
};

export default EditParty;