function TravelCard({ id, località, data_inizio, data_finale }) {
    return (
        <div>
            <div id={id}>
                <h3>{località}</h3>
            </div>
            <div>
                <span>{data_inizio} - {data_finale}</span>
            </div>
        </div>
    )
}

export default TravelCard;