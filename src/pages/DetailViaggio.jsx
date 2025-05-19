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
                    placeholder="Cerca per nome o cognome"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <p className={clientiViaggio.length >= viaggio.posti_max ? "text-red bg-red" : "text-green bg-green"}>
                Partecipanti: {clientiViaggio.length} / {viaggio.posti_max}
            </p>
        </div>


        <ul className="users-list">

            {clientiFiltrati.map((cliente) => (
                <li key={cliente.id}><CustomerCard data={cliente} /></li>
            ))}
        </ul>

        <button onClick={() => navigate(-1)}>prev</button>

    </div>;
};


export default DetailViaggio;