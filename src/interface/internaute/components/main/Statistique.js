import React , {useEffect , useState}from 'react'
import { Segment } from 'semantic-ui-react'
import { FaUserAlt ,FaTrash, FaTruckMoving } from "react-icons/fa";
import { Typography } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ZoneDepotImg from '../../../../Global/images/zoneDepot.svg'
import QuantiteTotaleCollecteZone from './QuantiteTotalCollecteZone';

const CardStatistique =( {data , nom ,icon})=>{
  return (
    <div>
      <div style={{display:"flex", justifyContent:"center"}}>   
        {icon}
        <Typography variant='h5' sx={{fontSize:"35px", fontWeight:"500", fontFamily:"Fredoka", color:"green"}} >
          {data}
        </Typography>  
      </div>
      <Typography variant='p' sx={{fontSize:"17px",fontWeight:"500", fontFamily:"Fredoka", color:"green"}} >
        {nom}
      </Typography>
    </div>
  )
}

const Card2 =( {data , nom})=>{
  return (
    <div style={{margin:'30px'}}>
      <div style={{display:"flex", justifyContent:"center"}}>   
        <Typography variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka", color:"green"}}>
          {data} KG
        </Typography>  
      </div>
      <Typography variant='p' sx={{fontSize:"19px", fontWeight:"500", fontFamily:"Fredoka", color:"green"}}>
        {nom}
      </Typography>
    </div>
  )
}

export default function Statistique() {
  var requestOptions = {
    method: 'GET',
  };
  const [tableData, setTableData] = useState(null)
  const getData = () => {
      fetch("http://127.0.0.1:8000/api/internaute/dashborad", requestOptions)
      .then(response => response.json())
      .then(result => setTableData(result))
      .catch(error => console.log('error', error));
  
    }
    useEffect(() => {
      getData()
    }, [])
    if(tableData!==null){
      const plastique= tableData.qt_dechet_plastique
      const papier= tableData.qt_dechet_papier
      const composte= tableData.qt_dechet_composte
      const canette= tableData.qt_dechet_canette
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            padding: {
              top: 10,
              bottom: -40,
              align:'center',          }
          },
        },
      };
   const pieData = {
    labels: ['Plastique', 'Papier', 'Composte', 'Canette'],
    datasets: [
      {
        data: [plastique,papier,composte,canette],
        backgroundColor: [
          'rgb(18, 102, 241)',
          'rgb(255, 173, 13)',
          'rgb(0, 183, 74)',
          'rgb(249, 49, 84)',
        ],

        borderWidth: 1,
      },
    ],
  };
  return (
    <Segment id='statistiques' style={{ padding: '10em 0em 0em', height:"102vh" }} vertical>
      <p className='title-section'> Statistiques </p>
      <div style={{display:"grid", gridTemplateColumns:'1fr', columnGap:'3%', margin:"-50px 0px 0"}}>
        <div style={{display:"grid", gridTemplateColumns:'65% 34%',padding:"40px 20px 0", marginTop:"20px"}} >        
          <div className="container2">
            <CardStatistique data={tableData.nbr_etablissement} nom='Etablissements'
              icon={ <ApartmentIcon className='card-icon' style={{fontSize:"50px", color:'green'}}/>}/>

            <CardStatistique data={tableData.nbr_poubelle_vendus} nom='Poubelles Vendues'
              icon={ <FaTrash className='card-icon' style={{width:"35px", color:'green'}}/>}/>

            <CardStatistique data={tableData.nbr_ouvrier} nom='Ouvriers' 
              icon={ <FaUserAlt className='card-icon' style={{width:"40px", color:'green'}}/>}/>

            <CardStatistique data={tableData.nbr_zone_travail} nom='Zones de travail'
              icon={ <PinDropIcon className='card-icon' style={{fontSize:"48px", color:'green'}}/>}/>

            <CardStatistique data={tableData.nbr_zone_depot} nom='Zones de depots'
              icon={ <img src={ZoneDepotImg} className='card-icon' style={{width:"55px", margin:"5px 0 -10px"}}/>}/>
            
            <CardStatistique data={tableData.nbr_camion} nom='Camions'
              icon={ <FaTruckMoving className='card-icon' style={{width:"44px",color:'green'}}/>}/>
          </div> 
          <div style={{ textAlign:"center"}}>
            <p style={{color:"black", fontSize:"18px", fontWeight:"bold"}}>
              Quantités totales des déchets collectés
            </p><QuantiteTotaleCollecteZone/>
          </div> 
        </div> 
      </div>
    </Segment>  
  )
  }else{
    return (
     <>Vide</>
    );
  };
}
