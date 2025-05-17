import { Link } from "react-router-dom";


function TravelCard({ data }) {
    const { id, località, data_inizio, data_finale, itinerario } = data;
    return (
        <div className="travel-card">
            <div>
                <h3>{località}</h3>
            </div>
            <div>
                <span>{data_inizio} - {data_finale}</span>
            </div>
            <div>
                <h4>{itinerario}</h4>
            </div>
            <div>
                <Link to={`/${id}`}>Info</Link>
            </div>
        </div>
    )
}

export default TravelCard;
