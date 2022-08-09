import React , {useState , useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paper} from '@mui/material'
import { styled } from '@mui/material/styles';
import FiltrageRevenuReschoolMois from './RevenuReschool/FiltrageRevenuReschoolMois';
import SituationGestionnaire from './RevenuReschool/SituationGestionnaire';
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
  return {  id: `simple-tab-${index}`,  'aria-controls': `simple-tabpanel-${index}`, };
}
export default function ReschoolSituation() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => { setValue(newValue);};
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
        <SituationGestionnaire/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <br/>
        <FiltrageRevenuReschoolMois/>
      </TabPanel>
    </div>   
  )
}
