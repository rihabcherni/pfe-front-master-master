import { Skeleton } from '@mui/material'
import React , {useState, useEffect} from 'react'
import './CSS/Dashboard.css'

export default function PrixActuelleGlobale() {
  var requestOptions = { method: 'GET', redirect: 'follow'};
  const [tableData, setTableData] = useState(null)
  const getData = () => {
    fetch("http://127.0.0.1:8000/api/prixdechets", requestOptions).then(response => response.json()).then(result => setTableData(result))
    .catch(error => console.log('error', error));
  }  
  useEffect(() => { getData()}, [])
  if(tableData!==null){
  return (
       <div className='table-prix'>
        <table>
            <tr>
                <th rowSpan={2}>Prix Actuelle  DT/KG</th>
                <th style={{color:"blue"}}>Plastique</th>
                <th style={{color:"orange"}}>Papier</th> 
                <th style={{color:"green"}}>Composte</th>
                <th style={{color:"red"}}>Canette</th>
            </tr>
            <tr>
                <th style={{color:"blue"}} >{tableData.prix_plastique}</th>
                <th style={{color:"orange"}}>{tableData.prix_papier}</th> 
                <th style={{color:"green"}}>{tableData.prix_composte}</th>
                <th style={{color:"red"}}>{tableData.prix_canette}</th>
            </tr>
        </table>
      </div>
  )
  }else{
    return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)"}}>
        <Skeleton variant="rectangular" width={300} height={150} />
        <Skeleton variant="rectangular" width={300} height={150} />
        <Skeleton variant="rectangular" width={300} height={150} />
        <Skeleton variant="rectangular" width={300} height={150} />
    </div>
    );
  };
}
