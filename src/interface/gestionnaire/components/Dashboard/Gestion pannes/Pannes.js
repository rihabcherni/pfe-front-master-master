import React ,{useEffect, useState} from 'react'
import { Grid, Typography , Paper ,Button} from '@mui/material'
import { styled } from '@mui/material/styles';
import TopTablePanneCamion from './TopTablePanneCamion';
import Top3 from '../../../../../Global/images/top3.PNG'
import ChartImg from '../../../../../Global/images/chart.png'
import TopTablePannePoubelle from './TopTablePannePoubelle';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import  ChartPanne  from './ChartPanne';
import { Link } from 'react-router-dom';
import {StyledTypography} from '../../../../../style'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import '../../../css/panne.css'
import PanneCamionFilterAnnee from './PanneCamionFilterAnnee';
import PannePoubelleFilterAnnee from './PannePoubelleFilterAnnee';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel"  hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (<Box sx={{ p:1}}> <StyledTypography>{children}</StyledTypography></Box> )}
    </div>
  );
}
TabPanel.propTypes = { children: PropTypes.node, index: PropTypes.number.isRequired, value: PropTypes.number.isRequired};
function a11yProps(index) { return { id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}`,};}
export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? "#2c2c2c" : "#FFF",
  border: theme.palette.mode === 'dark' ? "rgb(88, 88, 88) solid 3px":'#FFF solid 3px', boxShadow:"0px 1px 8px 1px rgb(125, 125, 125)",
  ...theme.typography.body2 , padding: theme.spacing(1), margin: theme.spacing(1), textAlign: 'center', color: theme.palette.text.secondary,
} ));
export  function Right({tableData ,type}){
  const [value1, setValue1] = useState(0);
  const handleChange1 = (event, newValue) => { setValue1(newValue) };
  return(<div>     
  <Box sx={{margin :"-80px 0 0 0"}}>
      <Grid container spacing={3}>
          <Grid item xs>
              <Tabs value={value1} onChange={handleChange1} aria-label="basic tabs example">
                  <Tab label={<img src={ChartImg} alt="Chart" width="30px"/>} {...a11yProps(0)} sx={{textTransform:"capitalize"}}/>
                  <Tab label={<img src={Top3} alt="top3" width="30px"/>} {...a11yProps(1)} sx={{textTransform:"capitalize"}}/>
              </Tabs>
          </Grid>
      </Grid>
  </Box>
  {(type==="camion")?
    <>
      <TabPanel value={value1} index={0}>
          <ChartPanne url={process.env.REACT_APP_API_KEY+"/api/pannes-camion-mois"} labelNbr='Nombre panne camion' labelCout='Cout panne camion' titre="nombre pannes totales par mois/année"/>         
      </TabPanel>
      <TabPanel value={value1} index={1}>
        <StyledTypography> Filtrage des pannes camions selon durée et cout :</StyledTypography>
          <TopTablePanneCamion  tableData={tableData}/> 
          <Link to="/gestionnaire/pannes-camions">
              <Button  variant="contained" sx={{marginLeft:"20px"}}  color="primary">plus d'information <ArrowRightAltIcon/></Button>
          </Link>  
      </TabPanel>
    </>:
    <>
        <TabPanel value={value1} index={0}>
            <ChartPanne url={process.env.REACT_APP_API_KEY+"/api/pannes-poubelle-mois"} labelNbr='Nombre panne poubelle' labelCout='Cout panne poubelle' titre="nombre pannes totales par mois/année"/>         
        </TabPanel>
        <TabPanel value={value1} index={1}>
            <StyledTypography> Filtrage des pannes poubelles selon durée et cout :</StyledTypography>
            <TopTablePannePoubelle  tableData={tableData}/> 
            <Link to="/gestionnaire/pannes-poubelles">
                <Button  variant="contained" sx={{marginLeft:"20px"}}  color="primary">plus d'information <ArrowRightAltIcon/></Button>
            </Link>  
        </TabPanel>
    </>
  }
</div>);
}
export default function Pannes() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => { setValue(newValue); };
  var requestOptions = { method: 'GET',redirect: 'follow'};
  const [tableData, setTableData] = useState(null)
  const getData = () => { fetch(`${process.env.REACT_APP_API_KEY}/api/pannes-dashboard`, requestOptions)
    .then(response => response.json()).then(result => setTableData(result)).catch(error => console.log('error', error))}
  useEffect(() => {getData()}, [])
  if(tableData!==null){
  return (
    <>    
      <div className="card-panne4">
        <Item>
          <Typography variant='h6' sx={{color:"green"}}> Coût total des pannes: </Typography> 
          <Typography sx={{fontSize:"15px"}}>{tableData.cout_total_panne} Dinars</Typography>
        </Item>
        <Item>
          <Typography variant='h6' sx={{color:"green"}}> Durée totale des pannes: </Typography>
          <Typography sx={{fontSize:"15px"}}>{tableData.duree_total_panne} Heures</Typography>
        </Item>
        <Item> 
          <Typography variant='h6' sx={{color:"green"}}>Nombre totale des pannes: <br/> </Typography>
          <Typography sx={{fontSize:"15px"}}>{tableData.nbr_panne_poubelle + tableData.nbr_panne_camion}</Typography>
        </Item>
        <Item> 
          <Typography variant='h6' sx={{color:"green"}}>Pourcentage totale des pannes:<br/></Typography> 
          <Typography sx={{fontSize:"15px"}}>{(tableData.pourcentage_panne_poubelle+ tableData.pourcentage_panne_camion)/2} %</Typography>
        </Item>
      </div>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Pannes Poubelles" {...a11yProps(0)} sx={{textTransform:"capitalize"}}/>
                <Tab label="Pannes Camions " {...a11yProps(1)} sx={{textTransform:"capitalize"}}/>
            </Tabs>
          </Grid>
        </Grid>
      </Box>
      <TabPanel value={value} index={0}>
      <div className='panne-container'>
        <div>
          <div className="card-panne8">
            <Item> 
              <Typography variant='h6' sx={{color:"green",fontWeight:"600"}}>Nombre pannes<br/> </Typography>
              <Typography  sx={{fontSize:"14px",fontWeight:"600"}}>{tableData.nbr_panne_poubelle}</Typography>
            </Item>
            <Item> 
              <Typography variant='h6' sx={{color:"green",fontWeight:"600"}}>Coût total<br/></Typography>
              <Typography  sx={{fontSize:"14px",fontWeight:"600"}}>{tableData.cout_panne_poubelles} D</Typography>
            </Item>
            <Item> 
              <Typography variant='h6' sx={{color:"green",fontWeight:"600"}}>Coût moyen<br/></Typography>
              <Typography  sx={{fontSize:"14px",fontWeight:"600"}}>{tableData.moy_cout_panne_poubelles} D</Typography>
            </Item>
            <div>
              <Item> 
                <Typography variant='h6' sx={{fontSize:"12px",fontWeight:"700"}}><span style={{color:"green"}}>Coût minimale : </span>
                <span sx={{fontSize:"12px",fontWeight:"700", color:"gray !important"}}>{tableData.min_cout_panne_poubelles } D</span></Typography>
              </Item>
              <Item> 
                <Typography variant='h6' sx={{fontSize:"12px",fontWeight:"700"}}><span style={{color:"green"}}>Coût maximale : </span>
                <span sx={{fontSize:"12px",fontWeight:"700", color:"gray !important"}}>{tableData.max_cout_panne_poubelles}  D</span></Typography>
              </Item>
            </div>
            <Item> 
              <Typography variant='h6' sx={{color:"green",fontWeight:"600"}}>Durée totale<br/></Typography>
              <Typography  sx={{fontSize:"14px",fontWeight:"600"}}>{tableData.sum_duree_poubelles} Jours</Typography>
            </Item>
            <Item> 
              <Typography variant='h6' sx={{color:"green",fontWeight:"600"}}>Durée moyenne <br/></Typography>
              <Typography  sx={{fontSize:"14px",fontWeight:"600"}}>{tableData.moy_duree_poubelles} Jours</Typography>
            </Item>
            <div>
              <Item> 
                <Typography variant='h6' sx={{fontSize:"12px",fontWeight:"700"}}><span style={{color:"green"}}>Durée minimale : </span>
                <span sx={{fontSize:"12px",fontWeight:"700", color:"gray !important"}}>{tableData.min_duree_panne_poubelle }J</span></Typography>
              </Item>
              <Item> 
                <Typography variant='h6' sx={{fontSize:"12px",fontWeight:"700"}}><span style={{color:"green"}}>Durée maximale : </span>
                <span sx={{fontSize:"12px",fontWeight:"700", color:"gray !important"}}>{tableData.max_duree_panne_poubelle}J</span></Typography>
              </Item>
            </div>
            <Item> 
              <Typography variant='h6' sx={{color:"green", fontWeight:"600"}}>Pourcentage<br/></Typography>
              <Typography  sx={{fontSize:"14px",fontWeight:"600"}}>{tableData.pourcentage_panne_poubelle} %</Typography>
            </Item>
          </div>
          <div className='card-panne'>
            <Item>
               <PannePoubelleFilterAnnee/>
            </Item>
            <Item>   
              <StyledTypography> Filtrage des pannes des poubelles selon durée et coût :</StyledTypography>
              <TopTablePannePoubelle  tableData={tableData}/> 
              <Link to="/gestionnaire/pannes-poubelles">
                <Button  variant="contained" sx={{marginLeft:"20px"}}  color="primary">Plus d'informations <ArrowRightAltIcon/></Button>
              </Link>  
            </Item> 
          </div>
        </div>  
      </div>
      </TabPanel>           
      <TabPanel value={value} index={1}>
        <div className='panne-container'>
          <div>
          <div className="card-panne8">
            <Item> 
              <Typography variant='h6' sx={{color:"green",fontWeight:"600"}}>Nombre pannes<br/> </Typography>
              <Typography  sx={{fontSize:"14px",fontWeight:"600"}}>{tableData.nbr_panne_camion}</Typography>
            </Item>
            <Item> 
              <Typography variant='h6' sx={{color:"green",fontWeight:"600"}}>Coût total<br/></Typography>
              <Typography  sx={{fontSize:"14px",fontWeight:"600"}}>{tableData.cout_panne_camions} D</Typography>
            </Item>
            <Item> 
              <Typography variant='h6' sx={{color:"green",fontWeight:"600"}}>Coût moyen<br/></Typography>
              <Typography  sx={{fontSize:"14px",fontWeight:"600"}}>{tableData.moy_cout_panne_camions} D</Typography>
            </Item>
            <div>
              <Item> 
                <Typography variant='h6' sx={{fontSize:"12px",fontWeight:"700"}}><span style={{color:"green"}}>Coût minimale: </span>
                <span sx={{fontSize:"12px",fontWeight:"700", color:"gray !important"}}>{tableData.min_cout_panne_camions}D</span></Typography>
              </Item>
              <Item> 
                <Typography variant='h6' sx={{fontSize:"12px",fontWeight:"700"}}><span style={{color:"green"}}>Coût maximale: </span>
                <span sx={{fontSize:"12px",fontWeight:"700", color:"gray !important"}}>{tableData.max_cout_panne_camions}D</span></Typography>
              </Item>
            </div>
            <Item> 
              <Typography variant='h6' sx={{color:"green",fontWeight:"600"}}>Durée totale<br/></Typography>
              <Typography  sx={{fontSize:"14px",fontWeight:"600"}}>{tableData.sum_duree_camion} Jours</Typography>
            </Item>
            <Item> 
              <Typography variant='h6' sx={{color:"green",fontWeight:"600"}}>Durée moyenne <br/></Typography>
              <Typography  sx={{fontSize:"14px",fontWeight:"600"}}>{tableData.moy_duree_camion} Jours</Typography>
            </Item>
            <div>
              <Item> 
                <Typography variant='h6' sx={{fontSize:"12px",fontWeight:"700"}}><span style={{color:"green"}}>Durée minimale:</span>
                <span sx={{fontSize:"12px",fontWeight:"700", color:"gray !important"}}>{tableData.min_duree_panne_camion } J</span></Typography>
              </Item>
              <Item> 
                <Typography variant='h6' sx={{fontSize:"12px",fontWeight:"700"}}><span style={{color:"green"}}>Durée maximale:</span>
                <span sx={{fontSize:"12px",fontWeight:"700", color:"gray !important"}}>{tableData.max_duree_panne_camion}J</span></Typography>
              </Item>
            </div>
            <Item> 
              <Typography variant='h6' sx={{color:"green",fontWeight:"600"}}>Pourcentage<br/></Typography>
              <Typography  sx={{fontSize:"14px",fontWeight:"600"}}>{tableData.pourcentage_panne_camion}  Jours</Typography>
            </Item>
          </div>

          <div className='card-panne'>
            <Item>
              <PanneCamionFilterAnnee/>       
            </Item>
            <Item>
              <StyledTypography> Filtrage des pannes des camions selon durée et coût :</StyledTypography>
              <TopTablePanneCamion  tableData={tableData}/> 
              <Link to="/gestionnaire/pannes-camions">
                <Button variant="contained" sx={{marginLeft:"20px"}} color="primary">Plus d'informations<ArrowRightAltIcon/></Button>
              </Link> 
            </Item> 
          </div>
        </div>  
      </div>
    </TabPanel> 
  </>)}else{ return (<>vide</>)};
}
