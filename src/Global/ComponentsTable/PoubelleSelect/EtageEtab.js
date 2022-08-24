import React , {useState , useEffect} from 'react'
export default function EtageEtab({etablissement_id, bloc_etablissement_id, data,onChange}) {
    const [etage, setEtage] = useState([])
    var requestOptionsetab = { method: 'GET',redirect: 'follow'};
    useEffect(() => {
        if( etablissement_id !== undefined && bloc_etablissement_id !== undefined){
            ;(async function getStatus() {
                const response =await fetch(`${process.env.REACT_APP_API_KEY}/api/etage-etablissement-liste/${etablissement_id}/${bloc_etablissement_id}`,requestOptionsetab)
                const json = await response.json()
                setEtage(json)            
                setTimeout(getStatus, 100000)
            })()
        }
    }, [etablissement_id])
    return (
        <div className="dropdown">
            <select  className='dropdown-result' value={data.etage_etablissement_id} name="etage_etablissement_id" id="etage_etablissement_id" onChange={(e) => onChange(e)}  >
                <option value="" disabled selected className='dropdown-placeholder'>Etage etablissement</option>
                  {etage.length!==0 ? etage.map((et)=><option className='dropdown-items' value={et}>{et}</option>):<option value={"0"}>null</option>}
            </select>
        </div>
    )
}

