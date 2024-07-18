import React from "react";
import partyFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateParty = () => {

    const [services, setServices] = useState([]);

    // Load Services
    
    useEffect(() => {
        
        const loadServices = async () => {
            
            const res = await partyFetch.get("/services");
            
            setServices(res.data)
        }

        loadServices();

    }, [])

    return (
        <div className="form-page">
            <h2>Crie sua próxima Festa</h2>
            <p>Defina o seu orçamento e escolha os serviços</p>
            <form>
                <label>
                    <span>Nome da Festa:</span>
                    <input type="text" placeholder="Seja Criativo..." required/>
                </label>
                <label>
                    <span>Anfitrião:</span>
                    <input type="text" placeholder="Quem está dando a Festa?" required/>
                </label>
                <label>
                    <span>Descrição:</span>
                    <textarea placeholder="Conte mais sobre a Festa..." required></textarea>
                </label>
                <label>
                    <span>Orçamento:</span>
                    <input type="number" placeholder="Quanto você pretende Investir?" required/>
                </label>
                <label>
                    <span>Imagem:</span>
                    <input type="text" placeholder="Insira a URL de uma Imagem" required/>
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
                                    <input type="checkbox" value={service.id}/>
                                    <p>Marque para solicitar</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <input type="submit" value="Criar Festa" className="btn" />
            </form>
        </div>
    );
};

export default CreateParty;

