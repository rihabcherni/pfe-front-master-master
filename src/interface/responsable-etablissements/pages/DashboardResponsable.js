import React , {useState , useEffect} from 'react';
import {Typography , Paper} from '@mui/material'
import { styled } from '@mui/material/styles';
import D1GlobalStatistiques from '../components/DashboardResponsable/D1GlobalStatistiques';
import TablePoubellePlusRemplis from '../components/DashboardResponsable/TablePoubellePlusRemplis';
import SituationFinanciere from '../components/DashboardResponsable/SituationFiancier/SituationFinanciere';
import QuantiteCollecteMois from '../components/DashboardResponsable/Quantite/QuantiteCollecteMois';
import QuantiteCollecteAnneefilter from '../components/DashboardResponsable/Quantite/QuantiteCollecteAnneefilter';
import Quantite from '../components/DashboardResponsable/Quantite/Quantite';
import PannePouelleResponsable from '../components/DashboardResponsable/panne/PannePouelleResponsable';

export const Item = styled(Paper)(({ theme }) =>  ({
  backgroundColor: theme.palette.mode === 'dark' ?  '#000':'#f0f0f0', border:' 2px solid #f0f0f0', ...theme.typography.body2,
  padding: theme.spacing(2),  margin:'10px 0', color: theme.palette.text.secondary })
);
export default function DashboardResponsable() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
  var requestOptions = { method: 'GET', headers: myHeaders,redirect: 'follow'};
  const [etablissement, setEtablissement] = useState([])
  const getData = () => {
    fetch("http://127.0.0.1:8000/api/auth-responsable-etablissement/etablissement-responsable", requestOptions).then(response => response.json())
    .then(result => setEtablissement(result.nom_etablissement)).catch(error => console.log('error', error));
  }
  useEffect(() => { getData()}, [])
  var profile = JSON.parse(localStorage.getItem('profile'));
  return (
    <div className="container_dashboard_resp">
      <Typography variant='h3' sx={{color:"green"}}> Tableau de bord </Typography>
      <Typography variant='h6' sx={{color:"gray"}}>
        Bonjour, <b style={{color:"green"}}>{profile.nom} {profile.prenom} </b> responsable d'établissement de l'<b style={{color:"green"}}> {etablissement}. </b> Bienvenue dans votre tableau de bord.
      </Typography>  
      <div>
          <Item>
            <Typography variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"10px"}}>Statistiques générales </Typography>
            <D1GlobalStatistiques/>                
          </Item>
          <Item>
            <Typography variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka"}}>Situation Financiére</Typography>
            <br/>
            <SituationFinanciere/> 
          </Item>
          <Item>
            <Typography variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka"}}>Quantité déchets collectés à votre établissement</Typography>
            <br/>
            <Quantite/>
          </Item>
          <Item>
            <Typography variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka"}}>Poubelles les plus remplises dans mon établissement </Typography>
            <br/>
            <TablePoubellePlusRemplis/> 
          </Item>  
          <Item>
            <Typography variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka"}}>PannePouelleResponsable</Typography>
            <PannePouelleResponsable/>
          </Item>              
      </div>
    </div>
  )
}
