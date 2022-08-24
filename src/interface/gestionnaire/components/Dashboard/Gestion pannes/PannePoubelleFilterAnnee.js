import React , {useState} from 'react'
import ChartPanne from './ChartPanne'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';   
import PropTypes from 'prop-types';
import TableStatPanne from './TableStatPanne';

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
              <Box sx={{ p: 1 }}>
                <>{children}</>
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
export default function PannePoubelleFilterAnnee() {
      const [value, setValue] = useState(0);
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    <div>
         <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                      <Tab  sx={{width:"33%"}} label="Panne par mois"  {...a11yProps(0)} />
                      <Tab sx={{width:"33%"}} label="Panne par année"  {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0} >
                  <ChartPanne url={process.env.REACT_APP_API_KEY+"/api/pannes-poubelle-mois"} labelNbr='Nombre panne poubelle'
                   labelCout='Cout panne poubelle' titre="Nombre des pannes totales par mois/année"/>                   
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div style={{ padding:"20px" }}><TableStatPanne url={process.env.REACT_APP_API_KEY+"/api/pannes-poubelle-annee"}/></div>
                </TabPanel>
              </Box>
    </div>
  )
}
