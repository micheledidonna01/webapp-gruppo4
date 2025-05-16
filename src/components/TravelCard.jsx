function TravelCard({ id, località, data_inizio, data_finale, itinerario }) {
    return (
        <div>
            <div id={id}>
                <h3>{località}</h3>
            </div>
            <div>
                <span>{data_inizio} - {data_finale}</span>
            </div>
            <div>
                <h4>{itinerario}</h4>
            </div>
        </div>
    )
}

export default TravelCard;