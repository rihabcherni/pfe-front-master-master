import React , {useState , useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paper} from '@mui/material'
import { styled } from '@mui/material/styles';
import FiltrageRevenuEtablissementMois from './RevenuResponsable/FiltrageRevenuEtablissementMois';
import SituationResponsable from './RevenuResponsable/SituationResponsable';
export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? "#2c2c2c" : "#FFF",border: theme.palette.mode === 'dark' ? "rgb(88, 88, 88) solid 3px":'#FFF solid 3px', boxShadow:"0px 1px 8px 1px rgb(125, 125, 125)",
  ...theme.typography.body2 , marginTop: theme.spacing(1),  marginBottom: theme.spacing(1), textAlign: 'center', color: theme.palette.text.secondary,
} ));
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div  role="tabpanel" hidden={value !== index}  id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}{...other}>
      {value === index && (
        <Box sx={{ p: 1}}>
          <Typography variant='h6'>{children}</Typography>
        </Box>
      )}
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
export default function ResponsableSituation() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => { setValue(newValue);};
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
    <div>
        <Box>
            <Grid container spacing={3}>
            <Grid item xs>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Totale" {...a11yProps(0)} sx={{textTransform:"capitalize"}}/>
                    <Tab label="Filtrer par etablissement" {...a11yProps(1)} sx={{textTransform:"capitalize"}}/>
                </Tabs>
            </Grid>
            </Grid>
        </Box>
        <TabPanel value={value} index={0}>
            <SituationResponsable/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <FiltrageRevenuEtablissementMois/>
        </TabPanel>
    </div>   
  )
}
