import viaggi from "../data/viaggi";
import TravelCard from "../components/TravelCard";
const Viaggi = () => {


    return <>
        <div>
            <h1>Viaggi:</h1>
            <div>
                <label htmlFor="search">Cerca viaggi:</label>
                <input type="text" id="search" />
            </div>

            <div>
                {viaggi?.map(viaggio => <TravelCard key={viaggio.id} data={viaggio}/>)}
            </div>
        </div>
    </>
}

export default Viaggi;