import React , {useState , useEffect} from 'react'
import EtageEtab from './EtageEtab';
export default function BlocEtab({etablissement_id, data,onChange}) {
    const [blocEtab, setBlocEtab] = useState([])
    var requestOptionsetab = { method: 'GET',redirect: 'follow'};
 
    useEffect(() => {
        if(etablissement_id !== undefined){
            ;(async function getStatus() {
                const response =await fetch(`http://127.0.0.1:8000/api/bloc-etablissement-liste/${etablissement_id}`,requestOptionsetab)
                const json = await response.json()
                setBlocEtab(json)            
                setTimeout(getStatus, 100000)
            })()
        }
    }, [etablissement_id])
  return (
    <div className="dropdown">
      <select  className='dropdown-result'  value={data.bloc_etablissement_id} name="bloc_etablissement_id" id="bloc_etablissement_id" onChange={(e) => onChange(e)}  >
        <option value="" disabled selected className='dropdown-placeholder'>Bloc établissement</option>
          {blocEtab.length!==0 ? blocEtab.map((bloc)=><option  className='dropdown-items' value={bloc}>{bloc}</option>): <option value={"0"}>null</option>}
      </select>
    </div>
  )
}
