import viaggi from "../data/viaggi";
import TravelCard from "../components/TravelCard";
import { useState } from "react";
const Viaggi = () => {
    const [search, setSearch] = useState("");
    const viaggiFiltrati = viaggi.filter(v =>
        v.localita?.toLowerCase().includes(search.toLowerCase())
    );
    return <>
        <div>
            <h1>Viaggi:</h1>
            <div>
                <label htmlFor="search">Cerca viaggi:</label>
                <input
                    type="text"
                    id="search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            <div>
                {viaggiFiltrati.map(viaggio => (
                    <TravelCard key={viaggio.id} data={viaggio} />
                ))}
            </div>
        </div>
    </>
}

export default Viaggi;