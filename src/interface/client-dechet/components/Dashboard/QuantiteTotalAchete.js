import { Skeleton } from '@mui/material'
import React , {useState, useEffect} from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import '../../../../Global/CSS/Dashboard.css'
import {StyledTypography} from '../../../../style'
ChartJS.register(ArcElement, Tooltip, Legend);
const option = {
  tooltips: {
    callbacks: {
      label: function(tooltipItem, data) {
        var dataset = data.datasets[tooltipItem.datasetIndex];
        var meta = dataset._meta[Object.keys(dataset._meta)[0]];
        var total = meta.total;
        var currentValue = dataset.data[tooltipItem.index];
        var percentage = parseFloat((currentValue/total*100).toFixed(1));
        return currentValue + ' (' + percentage + '%)';
      },
      title: function(tooltipItem, data) {
        return data.labels[tooltipItem[0].index];
      }
    }
  }
}
export default function QuantiteTotalAchete() {
var myHeaders = new Headers();
myHeaders.append("Authorization",  `Bearer ${localStorage.getItem('auth_token')}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

  const [tableData, setTableData] = useState(null)
  const getData = () => {
    fetch("http://127.0.0.1:8000/api/auth-client-dechet/quantite-dechet-total-client", requestOptions)
    .then(response => response.json())
    .then(result => setTableData(result))
    .catch(error => console.log('error', error));
  }  
  useEffect(() => {
    getData()
  }, [])
  if(tableData!==null){
  return  (
    <>
        <StyledTypography className='title'>Quantite total dechets achetées</StyledTypography>
        <Doughnut   options={option}
            data={{
              labels: ['plastique', 'papier', 'composte', 'canette'],
              datasets: [{
                  label: '# of Votes',
                  data: [tableData.quantite_total_achetee_plastique,
                    tableData.quantite_total_achetee_papier,
                    tableData.quantite_total_achetee_composte,
                    tableData.quantite_total_achetee_canette],
                  backgroundColor: ['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)',],
                  borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)'],
                  borderWidth: 1,      
                },
              ],
            }} /> 
    </>
  )
}else{
  return (
   <div className='container-prix'>
      <Skeleton variant="rectangular" width={300} height={300} />
   </div>
  );
};
}

