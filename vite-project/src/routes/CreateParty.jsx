import React from "react";

const CreateParty = () => {
    return <div className="form-page">
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
                    <p>Serviços...</p>
                </div>
            </div>
            <input type="submit" value="Criar Festa" className="btn" />
        </form>
    </div>;
};

export default CreateParty;

