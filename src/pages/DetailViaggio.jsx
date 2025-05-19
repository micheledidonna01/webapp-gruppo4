import { useParams } from "react-router-dom";
import { useState } from "react";
import viaggi from "../data/viaggi";
import clienti from "../data/clienti";
import CustomerCard from "../components/CustomerCard";
import { useNavigate } from "react-router-dom";

const DetailViaggio = () => {
    const { id } = useParams();
    const idNum = parseInt(id);
    const [searchTerm, setSearchTerm] = useState("");
    const viaggio = viaggi.find(v => v.id === idNum);
    const clientiViaggio = clienti.filter(cliente => cliente.id_viaggio === idNum);
    const clientiFiltrati = clientiViaggio.filter(cliente => {
        const fullName = `${cliente.nome} ${cliente.cognome}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
    });

    let navigate = useNavigate()

    if (!viaggio) return <p>Viaggio non trovato.</p>;

    function showForm() {
        document.getElementById("formPartecipanti").style.display = "block";
    }

    return <div className="details-container">
        <div className="travel-data">
            <div className="travel-title">
                <h3>{viaggio.localita}</h3>
                <span>Dal <strong>{viaggio.data_inizio}</strong> al <strong>{viaggio.data_fine}</strong></span>
            </div>

            <div className="travellers-section">
                <h3>Viaggiatori:</h3>

                <input
                    type="text"
                    placeholder="Cerca utente..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <p className={clientiViaggio.length >= viaggio.posti_max ? "text-red bg-red" : "text-green bg-green"}>
                Partecipanti: {clientiViaggio.length} / {viaggio.posti_max}
            </p>
            <button onClick={showForm}>Aggiungi partecipanti</button>
            <div id="formPartecipanti" style={{ display: "none" }}>
                <div>prova</div>
            </div>
        </div>


        <ul className="users-list">

            {clientiFiltrati.map((cliente) => (
                <li key={cliente.id}><CustomerCard data={cliente} /></li>
            ))}
        </ul>

        <button className="btn-details" onClick={() => navigate(-1)}>Torna alla Home</button>

    </div>;
};


export default DetailViaggio;