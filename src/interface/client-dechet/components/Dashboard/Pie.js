import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import {TailSpin} from 'react-loader-spinner'

export default function Pie () {
    var myHeaders = new Headers();
    myHeaders.append("Authorization",  `Bearer ${localStorage.getItem('auth_token')}`);   
    var requestOptions = { method: 'GET', headers: myHeaders, redirect: 'follow'};   
    const [tableData,setTableData] = useState(null)
    const [chart, setChart] = useState(null)
    const chartOptions = () => {
      setChart ({
        options: {
          legend: {    
            position: 'top',fontSize:"14px", fontWeight:700, 
            labels: { colors: 'green'}},
          tooltip: {           
            style: { fontSize: '14px', fontWeight:900 }
          }, 
          labels: ['plastique','composte', 'papier', 'canette'],
          responsive: [ { breakpoint: 480 }],
          dataLabels: {
            enabled: true, 
            style: {
                colors: ['#fff'],
                fontWeight: 'bold', fontSize:"12px"
            },
          },
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
    const getData = () => {fetch(`${process.env.REACT_APP_API_KEY}/api/auth-client-dechet/quantite-dechet-total-client`, requestOptions)
      .then(response => response.json()).then(result => setTableData(result)).catch(error => console.log('error', error));
    }  
    useEffect(() => { getData()
       chartOptions() }, [])
    if(tableData!==null){
      return (
        <>
          <ReactApexChart  options={chart.options} type="donut" series={[tableData.quantite_total_achetee_plastique, tableData.quantite_total_achetee_composte, tableData.quantite_total_achetee_papier, tableData.quantite_total_achetee_canette]}/>          
        </>
      );
    }else{
      return (
        <div className='container-prix' style={{margin:"10% 30% 5%", verticalAlign:"center"}}>
           <TailSpin height="150" width="150" color='green' ariaLabel='loading' />
        </div>
      );
    };
  }