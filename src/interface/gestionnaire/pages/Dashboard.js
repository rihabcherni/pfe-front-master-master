import React , {useState , useEffect} from 'react';
import MapRegion from './mapRegion'
import Select from 'react-select'
import ChartVendsMois from "../components/Dashboard/Gestion Dechets/ventes/ChartVendusMois";
import TotalDechetCollectéMois from "../components/Dashboard/TotalDechetCollectéMois"
import DechetCollecteDepot from "../components/Dashboard/Gestion Dechets/collectes/DechetCollecteDepot"
import '../css/Dashboard.css'
import {Typography , Paper} from '@mui/material'
import { styled } from '@mui/material/styles';
import SituationFinanciere from '../components/Dashboard/SituationFiancierQuantite/SituationFinanciere'
import QuantiteTotaleCollecteMois from '../components/Dashboard/SituationFiancierQuantite/QuantiteMois/QuantiteTotaleCollecteMois';
import Pannes from '../components/Dashboard/Gestion pannes/Pannes';
import GlobalStatistiques from '../components/Dashboard/GlobalStatistiques';
import DechetsTotalesVendus from "../components/Dashboard/Gestion Dechets/ventes/DechetsTotalesVendus";
import QuantiteEtablissement from '../components/Dashboard/SituationFiancierQuantite/QuantiteMois/QuantiteEtablissement';
export const Item =styled(Paper)(({theme})=>({backgroundColor:theme.palette.mode==='dark'?'#1e1e1e':'#f0f0f0',border:'2px solid #f0f0f0', ...theme.typography.body2,padding:theme.spacing(2),margin:theme.spacing(2),color:theme.palette.text.secondary}));
const Dashboard = () => {
  var profile = JSON.parse(localStorage.getItem('profile'));
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);   
  var requestOptionsetab = { method: 'GET', headers: myHeaders,redirect: 'follow'};
  const [etab, setEtab] = useState([])
  const [etab0, setEtab0] = useState("")
  const [annee0, setAnnee0] = useState("")
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
    if (optionsEtab.length !== 0) { var onchangeSelectEtab = (item) => { setEtab0(item.value) ; setAnnee0("")}}
 }
  return (
    <div className="container_dashboard">
        <Typography variant='h3' sx={{color:"green",fontWeight:"500"}}>Tableau de bord</Typography>
        <Typography variant='h6' sx={{color:"gray", margin:"0 10px"}}>Bonjour, <b style={{color:"green"}}>{profile.nom}  {profile.prenom} </b> bienvenue dans votre tableau de bord</Typography>     
      <div > 
        <div>
            <div style={{width:"99%"}}>
              <Item>
                <Typography variant='h5' sx={{fontSize:"24px", margin:"20px",fontWeight:"700"}} color="primary">Statistiques générales </Typography>
                <GlobalStatistiques/>                
              </Item>
            </div>
            <div style={{display:'grid', gridTemplateColumns:"52.5% 46.5%"}}>
            <Item>
              <Typography variant='h5' color="primary"  sx={{fontSize:"24px",  margin:"0px 10px",fontWeight:"700"}} >
                Gestion de ventes des déchets
              </Typography>
              <br/>
              <DechetsTotalesVendus/>
              <ChartVendsMois/>                               
            </Item>                   
            <Item>
              <Typography variant='h5' color="primary" sx={{fontSize:"24px",  margin:"0px 10px",fontWeight:"700"}}>
                Gestion des déchets collectés
              </Typography>
              <br/>
              <DechetCollecteDepot/>
              <TotalDechetCollectéMois/> 
            </Item>          
          </div>  
        </div>  
        <div style={{width:"99%"}}>
          <Item>
            <Typography variant='h6'  sx={{fontSize:"24px", margin:"5px 10px",fontWeight:"700"}}  color="primary">Gestion des pannes</Typography>                      
            <Pannes/>
          </Item>
        </div>
        <div style={{width:"99%"}}>
          <Item>
            <Typography variant='h6' sx={{fontSize:"24px", margin:"0 5px",fontWeight:"700"}} color="primary">Gestion des poubelles sur terrain dans les établissements</Typography>
            <MapRegion/>
            <br/>   <br/>   <br/>   <br/>   <br/> 
          </Item>
        </div>
      </div> 
      <div style={{width:"99%"}}>
        <Item>
          <Typography variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka"}}>Situation Financiére</Typography>
          <br/>
          <SituationFinanciere/>
        </Item>
      </div>
      <div style={{width:"99%"}}>
        <Item>
          <Typography variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka"}}>Quantité déchets collectés</Typography>
          <br/>
          <div style={{display:'grid', gridTemplateColumns:"50.3% 47.7%", gap:"1%"}}>
            <QuantiteTotaleCollecteMois/>
            <div style={{margin:"57px 0 0"}}>
              <div style={{width:"25%", margin:"-10px 20px -85px 10px"}}>
                <Select onChange={onchangeSelectEtab} value={etab0} options={optionsEtab} 
                  getOptionValue={(option) => option.value} getOptionLabel={(option) => option.value} placeholder={etab0===""? "Établissement": etab0}/>
              </div>
              <QuantiteEtablissement etab0={etab0} annee0={annee0} />
            </div>
          </div>
        </Item>
      </div>
    </div>
  );
};
export default Dashboard;