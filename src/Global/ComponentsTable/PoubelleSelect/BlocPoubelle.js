import React , {useState , useEffect} from 'react'
export default function BlocPoubelle({etablissement_id, bloc_etablissement_id, etage_etablissement_id,data,onChange}) {
    const [blocPoubelle, setBlocPoubelle] = useState([])
    var requestOptionsetab = { method: 'GET',redirect: 'follow'};
    useEffect(() => {
        if( etablissement_id !== undefined && bloc_etablissement_id !== undefined && etage_etablissement_id !== undefined){
            ;(async function getStatus() {
                const response =await fetch(`${process.env.REACT_APP_API_KEY}/api/bloc-poubelle-liste/${etablissement_id}/${bloc_etablissement_id}/${etage_etablissement_id}`,requestOptionsetab)
                const json = await response.json()
                setBlocPoubelle(json)            
                setTimeout(getStatus, 100000)
            })()
        }
    }, [etablissement_id])
    return (
        <div className="dropdown">
            <select  className='dropdown-result'  value={data.bloc_poubelle_id} name="bloc_poubelle_id" id="bloc_poubelle_id" onChange={(e) => onChange(e)}  >
                <option className='dropdown-placeholder' value="" disabled selected>Bloc poubelle</option>
                  {blocPoubelle.length!==0 ? blocPoubelle.map((bp)=><option className='dropdown-items' value={bp}>{bp}</option>):<option value={"0"}>null</option>}
            </select>
        </div>
    )
}

