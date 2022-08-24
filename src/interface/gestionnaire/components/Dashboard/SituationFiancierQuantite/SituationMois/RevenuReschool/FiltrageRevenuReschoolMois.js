import React , {useState , useEffect} from 'react';
import ChartFilterEtab from  '../ChartFilterEtab'
import Select from 'react-select'

const FiltrageRevenuReschoolMois = () => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);   
  var requestOptionsetab = { method: 'GET', headers: myHeaders,redirect: 'follow'};
  const [etab, setEtab] = useState([])
  const [etab0, setEtab0] = useState("")

  useEffect(() => {
    ;(async function getStatus() {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/api/EtablissementListe`,requestOptionsetab)
      const json = await response.json()
      setEtab(json)            
      setEtab0("")            
      setTimeout(getStatus, 1000000)
    })()
  }, [])
  var optionsEtab = []    
  if(etab ){
    for (let i = 0; i < etab.length; i++) { optionsEtab.push({ value: etab[i],  }) }
    if (optionsEtab.length !== 0) { var onchangeSelectEtab = (item) => { setEtab0(item.value) }}
  }
  return (
    <> 
      <div style={{width:"20%", margin:"22px 20px -85px",fontSize:'12px' }}>
        <Select onChange={onchangeSelectEtab} value={etab0} options={optionsEtab} 
          getOptionValue={(option) => option.value} getOptionLabel={(option) => option.value} 
          placeholder={etab0===""? "Établissement": etab0}/>
      </div>
      <ChartFilterEtab url={`${process.env.REACT_APP_API_KEY}/api/revenu-reschool-mois-filter/`+etab0}
      title={`Nos revenus des déchets collectés  par mois en Dinars à `+ etab0}/>  
    </>
   
  );
}
export default FiltrageRevenuReschoolMois;

