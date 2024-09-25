import "../EditParty/EditParty.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { UserUpdateParty } from "../../hooks/UserUpdateParty";
import { UserFetchParty } from "../../hooks/UserFetchParty";
import { UserFetchParties } from "../../hooks/UserFetchParties";

const EditParty = () => {
    const {id} = useParams();
    const {document: party} = UserFetchParty("parties", id);

    const {documents: contacts} = UserFetchParties("contacts", null);
    const {documents: attractions} = UserFetchParties("attractions", null);
    const {documents: tasks} = UserFetchParties("tasks", null);
    const {documents: place} = UserFetchParties("places", null);
    const {documents: supplier} = UserFetchParties("suppliers", null);

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    
    const [name, setName] = useState("");
    const [attractionsName, setAttractionsName] = useState("");
    const [tasksDescription, setTasksDescription] = useState("");
    const [places, setPlaces] = useState("");
    const [suppliers, setSuppliers] = useState("");

    const [formError, setFormError] = useState("");

    useEffect(() => {
        if(party) {
            setTitle(party.title)
            setImage(party.image)
        }
    }, [party])
    
    const {user} = useAuthValue();
    const {updateDocument, response} = UserUpdateParty("parties");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");

        // Validação da URL
        try {

            new URL(image)

        } catch (error) {
            
            setFormError("A imagem precisa ser uma URL.")
        };

        // Verificar todos os valores
        if(formError) return;

        const data = {
            title,
            image,
            name,
            attractionsName,
            tasksDescription,
            places,
            suppliers,
            uid: user.uid,
            createdBy: user.displayName
        };
        
       updateDocument(id, data);

        // Redireciona para a Home
        navigate("/dashboard");
    };
    
    return (
        <div className="edit_party">
            {party && (
                <>
                    <h2>Editar Festa</h2>
                    <p>Altere as informações das suas festas da forma que preferir!</p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Título:*</span>
                            <input type="text"
                                name="title"
                                placeholder="Título da sua Festa"
                                required 
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}  
                            />
                        </label>
                        <label>
                            <span>URL da Imagem:*</span>
                            <input type="text"
                                name="image"
                                placeholder="Insira o endereço da imagem que tem a sua festa"
                                required 
                                onChange={(e) => setImage(e.target.value)}
                                value={image}  
                            />
                        </label>
                        <p className="title_preview">Imagem atual:</p>
                        <img
                         className="image_preview"
                         src={party.image}
                         alt={party.title}
                        />
                        
                        <div>
                            <h3>Selecione os Contatos:</h3>
                            <div className="contacts-list">
                                {contacts.map((contacts, i) => (
                                    <div
                                        key={i}
                                        className={`contact-item ${name.includes(contacts.name) ? 'selected' : ''}`}
                                        onClick={() => {
                                            setName(prev => {
                                                if (prev.includes(contacts.name)) {
                                                    return prev.filter(item => item !== contacts.name);
                                                } else {
                                                    return [...prev, contacts.name];
                                                }
                                            });
                                        }}
                                    >
                                        {contacts.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3>Selecione as Atrações:</h3>
                            <div className="contacts-list">
                                {attractions.map((attractions, i) => (
                                    <div
                                        key={i}
                                        className={`contact-item ${attractionsName.includes(attractions.name) ? 'selected' : ''}`}
                                        onClick={() => {
                                            setAttractionsName(prev => {
                                                if (prev.includes(attractions.name)) {
                                                    return prev.filter(item => item !== attractions.name);
                                                } else {
                                                    return [...prev, attractions.name];
                                                }
                                            });
                                        }}
                                    >
                                        {attractions.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3>Selecione as Tarefas:</h3>
                            <div className="contacts-list">
                                {tasks.map((tasks, i) => (
                                    <div
                                        key={i}
                                        className={`contact-item ${tasksDescription.includes(tasks.description) ? 'selected' : ''}`}
                                        onClick={() => {
                                            setTasksDescription(prev => {
                                                if (prev.includes(tasks.description)) {
                                                    return prev.filter(item => item !== tasks.description);
                                                } else {
                                                    return [...prev, tasks.description];
                                                }
                                            });
                                        }}
                                    >
                                        {tasks.description}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3>Selecione os Locais:</h3>
                            <div className="contacts-list">
                                {place.map((place, i) => (
                                    <div
                                        key={i}
                                        className={`contact-item ${places.includes(place.name) ? 'selected' : ''}`}
                                        onClick={() => {
                                            setPlaces(prev => {
                                                if (prev.includes(place.name)) {
                                                    return prev.filter(item => item !== place.name);
                                                } else {
                                                    return [...prev, place.name];
                                                }
                                            });
                                        }}
                                    >
                                        {place.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3>Selecione os Fornecedores:</h3>
                            <div className="contacts-list">
                                {supplier.map((supplier, i) => (
                                    <div
                                        key={i}
                                        className={`contact-item ${suppliers.includes(supplier.name) ? 'selected' : ''}`}
                                        onClick={() => {
                                            setSuppliers(prev => {
                                                if (prev.includes(supplier.name)) {
                                                    return prev.filter(item => item !== supplier.name);
                                                } else {
                                                    return [...prev, supplier.name];
                                                }
                                            });
                                        }}
                                    >
                                        {supplier.name}
                                    </div>
                                ))}
                            </div>
                        </div>  

                        {!response.loading && <button className="btn">Editar</button>}
                        {response.loading && (
                            <button className="btn" disabled>
                                Aguarde.. .
                            </button>
                        )}
                        {(response.error || formError) && (
                            <p className="error">{response.error || formError}</p>
                        )}
                    </form>
                </>
            )}
        </div>
    );
};

export default EditParty;