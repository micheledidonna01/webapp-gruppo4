import viaggi from "../data/viaggi";
import TravelCard from "../components/TravelCard";
import { useState } from "react";
const Viaggi = () => {
    const [search, setSearch] = useState("");
    const viaggiFiltrati = viaggi.filter(v =>
        v.localita?.toLowerCase().includes(search.toLowerCase())
    );
    return <>
        <section className="travels-container">

            <h1>Viaggi:</h1>

            <div className="search-travel">
                <label htmlFor="search">Cerca viaggi:</label>
                <input
                    type="text"
                    id="search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            <div className="card-container">
                {viaggiFiltrati.map(viaggio => (
                    <TravelCard key={viaggio.id} data={viaggio} />
                ))}

            </div>

        </section>
    </>
}

export default Viaggi;