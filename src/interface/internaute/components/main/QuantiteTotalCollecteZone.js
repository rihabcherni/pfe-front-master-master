import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import {TailSpin} from 'react-loader-spinner'

export default function QuantiteTotaleCollecteZone  () { 
    var requestOptions = { method: 'GET', redirect: 'follow'};   
    const [tableData,setTableData] = useState(null)
    const [chart, setChart] = useState(null)
    const chartOptions = () => {
      setChart ({
        options: {
          legend: {    
            position: 'top',fontSize:"14px", fontWeight:700, 
            labels: { colors: 'green'}},
          tooltip: {  style: { fontSize: '14px', fontWeight:900 }}, 
          labels: ['plastique','composte', 'papier', 'canette'],
          responsive: [ { breakpoint: 480 }],
          dataLabels: { enabled: true, style: { colors: ['#fff'], fontWeight: 'bold', fontSize:"12px" }},
          plotOptions: {
            pie: {
              customScale: 1,
              donut: {
                size: '55%',
                labels: {
                  show: true,
                 
                }
              }
            }
          }
        
        }
      });
    }
    const getData = () => {fetch(`${process.env.REACT_APP_API_KEY}/api/internaute/quantite-dechete-totale-collecte`, requestOptions)
      .then(response => response.json()).then(result => setTableData(result)).catch(error => console.log('error', error));
    }  
    useEffect(() => { 
        getData()
       chartOptions() 
    } , [])
     
       if (tableData !== null) {
           var dataplastique = tableData.qt_dechet_plastique
           var datacomposte = tableData.qt_dechet_composte
           var datapapier = tableData.qt_dechet_papier
           var datacanette = tableData.qt_dechet_canette
       }
       console.log(dataplastique)
    if(tableData!==null){
      return (
        <div style={{display:"grid", gridTemplateColumns:"100%"}}>   
          <ReactApexChart options={chart.options} type="donut" series={[dataplastique, datacomposte, datapapier, datacanette]}/>          
        </div>
      );
    }else{
      return (
        <div style={{ margin:"10% 35% 5%", verticalAlign:"center"}}>
          <TailSpin height="400" width="400" color='green' ariaLabel='loading' />
        </div>
      );
    };
}