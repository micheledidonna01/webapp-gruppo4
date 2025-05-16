import viaggi from "../data/viaggi";
import { useParams } from "react-router-dom";
import clienti from "../data/clienti";

const DetailViaggio = ()=>{

    const {id} = useParams();
    let viaggio = viaggi[id];
    const clientiViaggio = clienti.filter(cliente => cliente.id_viaggio === parseInt(id));
    return <>
        <div>
            <div>
                <h3>{viaggio.località}</h3>
            </div>
            <div>
                <span>{viaggio.data_inizio} - {viaggio.data_finale}</span>
            </div>
            <div>
                <h4>{viaggio.itinerario}</h4>
            </div>
        </div>

        <h3>Viaggiatori:</h3>
        <ul className="partecipanti">
            {clientiViaggio?.map((cliente) => <li key={cliente.id}>{cliente.nome}</li> )}
        </ul>
    </>
}

export default DetailViaggio;