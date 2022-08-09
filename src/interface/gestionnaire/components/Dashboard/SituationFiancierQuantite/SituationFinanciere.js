import React , {useState , useEffect} from 'react';
import PieChartSituation from'./PieChartSituation'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paper} from '@mui/material'
import { styled } from '@mui/material/styles';
import PrixActuelleGlobale from '../../../../../Global/PrixActuelleGlobale'
import ReschoolSituation from './SituationMois/ReschoolSituation';
import ResponsableSituation from './SituationMois/ResponsableSituation';
import TotaleSituation from './SituationMois/TotaleSituation';
export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? "#2c2c2c" : "#FFF",
  border: theme.palette.mode === 'dark' ? "rgb(88, 88, 88) solid 3px":'#FFF solid 3px', boxShadow:"0px 1px 8px 1px rgb(125, 125, 125)",
  ...theme.typography.body2 , marginTop: theme.spacing(1),  marginBottom: theme.spacing(1), textAlign: 'center', color: theme.palette.text.secondary,
} ));
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
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
export default function SituationFinanciere() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => { setValue(newValue);};
  return (
    <div style={{display:'grid', gridTemplateColumns:"60% 39%", gap:"1%"}}>
      <Item>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Revenu Reschool" {...a11yProps(0)} sx={{textTransform:"capitalize"}}/>
                  <Tab label="Revenu Totale" {...a11yProps(1)} sx={{textTransform:"capitalize"}}/>
                  <Tab label="Revenu Responsable totale" {...a11yProps(3)} sx={{textTransform:"capitalize"}}/>
                </Tabs>
            </Grid>
          </Grid>
        </Box>
        <TabPanel value={value} index={0}>
          <ReschoolSituation/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TotaleSituation/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ResponsableSituation/>
        </TabPanel>
      
      </Item>
      <div>
          <Item> <PrixActuelleGlobale/></Item>
          <Item><div><PieChartSituation/></div> </Item>
      </div>     
    </div>
  )
}