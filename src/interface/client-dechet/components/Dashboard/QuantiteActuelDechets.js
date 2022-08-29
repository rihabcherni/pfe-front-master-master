import React , {useState, useEffect} from 'react';
import {Chart as ChartJS,CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { TailSpin } from  'react-loader-spinner'
import {StyledTypography} from '../../../../style'
import '../../../../Global/CSS/Dashboard.css'
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);
export const options = {
    responsive: true,
    plugins: { legend: {  position: 'top' },},
    
  };
export default function QuantiteActuelDechets() {
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
const [tableData, setTableData] = useState(null)
const getData = () => {
fetch(`${process.env.REACT_APP_API_KEY}/api/somme-total-dechet-zone-travail`, requestOptions)
  .then(response => response.json())
  .then(result => setTableData(result))
  .catch(error => console.log('error', error));
}  
useEffect(() => {
  getData()
}, [])
console.log(tableData)
if(tableData!==null){
  return (
    <>
      <Bar  options={options} data={{
        labels: ['Plastique', 'Papier', 'Composte', 'Canette'],
        datasets: [
          {label:  "Quantité",
            data:  [tableData.quantite_total_collecte_plastique,tableData.quantite_total_collecte_papier,
              tableData.quantite_total_collecte_composte,tableData.quantite_total_collecte_canette],
            backgroundColor: [ '#321fdb', '#f9b115', '#2eb85c', '#e55353'],
          },
        ],
      }} />
    </>
   )
 }else{
     return (
      <div style={{margin:"10% 30% 5%", verticalAlign:"center"}}>
        <TailSpin height="150" width="150" color='green' ariaLabel='loading' />
      </div>
     );
   };
 }