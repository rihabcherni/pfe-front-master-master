import React from 'react'
import PrixActuelle from '../../../Global/PrixActuelle'
import QuantiteActuelDechets from '../components/Dashboard/QuantiteActuelDechets'
import Pie from '../components/Dashboard/Pie'
import { Typography , Paper} from '@mui/material'
import { styled } from '@mui/material/styles';
import {StyledTypography} from '../../../style'
import QuantiteStockDechets from '../components/Dashboard/QuantiteStockDechets'
import QuantiteDechetAcheteMois from '../components/Dashboard/QuantiteDechetAcheteMois'
import LastCommande from '../components/Dashboard/LastCommande'
export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? "#2c2c2c" : "#FFF",
  border: theme.palette.mode === 'dark' ? "rgb(88, 88, 88) solid 3px":'#FFF solid 3px', boxShadow:"0px 1px 8px 1px rgb(125, 125, 125)",
  ...theme.typography.body2 , padding: theme.spacing(0.5), margin: theme.spacing(0.5), textAlign: 'center', color: theme.palette.text.secondary,
} ));
export default function DashboardClientDechet() {
  var profile = JSON.parse(localStorage.getItem('profile'));
  return (
    <div  style={{width:"98%",margin:"5px"}}>
        <Typography variant='h3' sx={{color:"green"}}>Tableau de bord</Typography>
        <Typography variant='h6' sx={{color:"gray"}}>Bonjour, <b style={{color:"green"}}> {profile.nom} {profile.prenom} </b> bienvenue dans votre tableau de bord</Typography>
      <div>
        <Item >
          <StyledTypography className='title'>Prix actuelle</StyledTypography>
          <PrixActuelle/>
        </Item>
        <div style={{display:"grid",gridTemplateColumns:"35% 28% 35%", gap:"1%"}}>
          <Item>
            <StyledTypography>Quantité totale de déchets collectés</StyledTypography>
            <QuantiteActuelDechets/>
          </Item>
          <Item>        
            <StyledTypography>Quantite total dechets achetées</StyledTypography>
            <Pie/> 
          </Item>
          <Item>
            <StyledTypography>Quantite dechets en stock</StyledTypography>
            <QuantiteStockDechets/>
          </Item>
        </div>
       </div>  

       <Item >
          <StyledTypography className='title'>Quantité déchets achetées par mois</StyledTypography>
          <QuantiteDechetAcheteMois/>
        </Item>
        <Item >
          <StyledTypography className='title'>Dernier commandes:</StyledTypography>
          <LastCommande/>
        </Item>
    </div>
  )
}