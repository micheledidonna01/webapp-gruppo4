import viaggi from "../data/viaggi";
import { useParams } from "react-router-dom";
import clienti from "../data/clienti";
import CustomerCard from "../components/CustomerCard";

const DetailViaggio = () => {

    const { id } = useParams();
    const idNum = parseInt(id);
    const viaggio = viaggi.find(v => v.id === idNum);
    const clientiViaggio = clienti.filter(cliente => cliente.id_viaggio === idNum);
    return <>
        <div>
            <h3>{viaggio.localita}</h3>
            <span>Dal <strong>{viaggio.data_inizio}</strong> al <strong>{viaggio.data_fine}</strong></span>
        </div>

        <h3>Viaggiatori:</h3>
        <ul className="partecipanti">
            {clientiViaggio?.map((cliente) => <li key={cliente.id}> <CustomerCard data={cliente} /></li>)}
        </ul>
    </>
}

export default DetailViaggio;