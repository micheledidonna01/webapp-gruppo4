import viaggi from "../data/viaggi";

const Viaggi = () => {
    
    return <>
        <div className="card">
        {viaggi?.map(viaggio => <div key={viaggio.id}>{viaggio.localita}</div>)}
        </div>

    </>
}

export default Viaggi;