import { Skeleton, Typography } from '@mui/material'
import React , {useState, useEffect} from 'react'
import './CSS/Dashboard.css'
import Plastique from './images/plastique.PNG'
import Papier from './images/papier.PNG'
import Composte from './images/composte.PNG'
import Canette from './images/canette.PNG'
const CardPrix = ({dechet, prix, color, image, color2}) => {
  return (
    <div style={{border:`3px solid ${color}`,backgroundColor:`${color2}`,boxShadow: "0px 1px 8px 2px #DCDCDC"}} className='card-prix'>
      <div> <img alt={`dechet ${dechet}`} src={image} className="image-prix" /> </div>
      <div className='data-prix'>
        <Typography variant='h6' color={color}>{dechet}</Typography>
        <Typography color={color}>{prix} DT/KG</Typography>
      </div> 
    </div>
  );
}

export default function PrixActuelle() {
  var requestOptions = { method: 'GET', redirect: 'follow'};
  const [tableData, setTableData] = useState(null)
  const getData = () => {
    fetch(`${process.env.REACT_APP_API_KEY}/api/prixdechets`, requestOptions).then(response => response.json()).then(result => setTableData(result))
    .catch(error => console.log('error', error));
  }  
  useEffect(() => { getData()}, [])
  if(tableData!==null){
  return (
      <div className='container-prix'>
        <CardPrix dechet="Plastique" prix={tableData.prix_plastique} color="blue" image={Plastique} color2="#89CFF0"/>
        <CardPrix dechet="Papier" prix={tableData.prix_papier} color="orange" image={Papier} color2="#FFFF99"/>
        <CardPrix dechet="Composte" prix={tableData.prix_composte} color="green" image={Composte} color2="#90EE90"/>
        <CardPrix dechet="Canette" prix={tableData.prix_canette} color="red" image={Canette} color2="#FFA07A"/>
      </div>
  )
  }else{
    return (
    <div className='container-prix'>
        <Skeleton variant="rectangular" width={300} height={150} />
        <Skeleton variant="rectangular" width={300} height={150} />
        <Skeleton variant="rectangular" width={300} height={150} />
        <Skeleton variant="rectangular" width={300} height={150} />
    </div>
    );
  };
}
