import React , {useState} from 'react'
import PoubelleTable from '../components/Table/gestionPoubelleEtablissement/PoubelleTable'
import BlocEtablissementTable from "../components/Table/gestionPoubelleEtablissement/BlocEtablissementTable"
import EtageEtablissementTable from "../components/Table/gestionPoubelleEtablissement/EtageEtablissementTable"
import BlocPoubelleTable from "../components/Table/gestionPoubelleEtablissement/BlocPoubelleTable"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GroupMuiTable from '../components/Table/gestionPoubelleEtablissement/GroupTable/GroupMuiTable';
export default function PoubelleEtablissement() {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {  setValue(newValue);};
  return (
    <>
      <Box sx={{ width: '100%', typography: 'body1' }} className='table-zone'>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="GROUP" value="1" />
              <Tab label="Blocs Etablissement" value="4" />
              <Tab label="Etages Etablissement" value="5" />
              <Tab label="Blocs Poubelles" value="6" />
              <Tab label="Poubelles" value="7" />
            </TabList>
          </Box>
          <TabPanel value="1"><GroupMuiTable/></TabPanel>
          <TabPanel value="4"><BlocEtablissementTable/></TabPanel>
          <TabPanel value="5"><EtageEtablissementTable/></TabPanel>
          <TabPanel value="6"><BlocPoubelleTable/></TabPanel>
          <TabPanel value="7"><PoubelleTable/></TabPanel>
        </TabContext>
      </Box>
    </>
  )
}
