import React ,{useState} from 'react'
import PrixActuelle from '../../../Global/PrixActuelle'
import Pie from '../components/Dashboard/Pie'
import { Typography , Paper, Box, Tabs, Tab} from '@mui/material'
import { styled } from '@mui/material/styles';
import {StyledTypography} from '../../../style'
import QuantiteStockDechets from '../components/Dashboard/QuantiteStockDechets'
import QuantiteDechetAcheteMois from '../components/Dashboard/QuantiteDechetAcheteMois'
import LastCommandeClient from '../components/Dashboard/TableCommande/LastCommandeClient'
import PropTypes from 'prop-types';
import SansLivraisonCommandeDechet from '../components/Dashboard/TableCommande/SansLivraisonCommandeDechet'
import MaxMontantCommandeDechet from '../components/Dashboard/TableCommande/MaxMontantCommandeDechet'
import SommeDechetTotalReschool from '../components/Dashboard/SommeDechetTotalReschool'
import QuantieDechetAcheteAnnee from '../components/Dashboard/QuantieDechetAcheteAnnee';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? "#2c2c2c" : "#FFF",
  border: theme.palette.mode === 'dark' ? "rgb(88, 88, 88) solid 3px":'#FFF solid 3px', boxShadow:"0px 1px 8px 1px rgb(125, 125, 125)",
  ...theme.typography.body2 , padding: theme.spacing(0.5), margin: theme.spacing(0.5), textAlign: 'center', color: theme.palette.text.secondary,
} ));
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (<Box sx={{ p: 1 }}> <>{children}</> </Box>)}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function DashboardClientDechet() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => { setValue(newValue); };
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
            <StyledTypography>Quantité totale de déchets collectés par Reschool:</StyledTypography>
            <SommeDechetTotalReschool/>
          </Item>
          <Item>        
            <StyledTypography>Quantité total déchets achetées</StyledTypography>
            <Pie/> 
          </Item>
          <Item>
            <StyledTypography>Quantité déchets en stock</StyledTypography>
            <QuantiteStockDechets/>
          </Item>
        </div>
       </div>  

       <Item >
          <div style={{ display:"grid", gridTemplateColumns:"50% 50%" }}>
            <QuantieDechetAcheteAnnee/>
            <QuantiteDechetAcheteMois/>
          </div>
        </Item>

        <Item >
          <StyledTypography className='title'>Commandes déchets achetées:</StyledTypography>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab sx={{ textTransform:"capitalize" }} label="Dernier commandes:"  {...a11yProps(0)} />
                <Tab sx={{ textTransform:"capitalize" }} label="Commandes sans livraison:"  {...a11yProps(1)} />
                <Tab sx={{ textTransform:"capitalize" }} label="Maximum montant commandes:"  {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0} ><LastCommandeClient/></TabPanel>
            <TabPanel value={value} index={1} ><SansLivraisonCommandeDechet/></TabPanel>
            <TabPanel value={value} index={2} ><MaxMontantCommandeDechet/></TabPanel>
          </Box>
        </Item>
    </div>
  )
}