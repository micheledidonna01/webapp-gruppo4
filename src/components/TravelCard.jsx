import { Link } from "react-router-dom";


function TravelCard({ data }) {
    const { id, localita, data_inizio, data_fine, itinerario } = data;
    return (

        <article>
            <div>Immagine</div>

            <div>
                <h3>{localita}</h3>
                <span>Dal <strong>{data_inizio}</strong> al <strong>{data_fine}</strong></span>
                <p>Cosa visiterai: <em>{itinerario}</em></p>

                <Link to={`/${id}`}>Info</Link>
            </div>
        </article>
    )
}

export default TravelCard;
