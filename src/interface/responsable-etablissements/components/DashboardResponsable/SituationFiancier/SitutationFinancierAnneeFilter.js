import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import {TailSpin} from 'react-loader-spinner'
import Select from 'react-select'
import { StyledTypography } from "../../../../../style";

export default function SitutationFinancierAnneeFilter () {
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
    const getData = () => {fetch(`${process.env.REACT_APP_API_KEY}/api/auth-responsable-etablissement/revenu-responsable-annee`, requestOptions)
      .then(response => response.json()).then(result => setTableData(result)).catch(error => console.log('error', error));
    }  
    useEffect(() => { getData()
       chartOptions() }, [])
       var options = []
       const [annee, setAnnee] = useState()
       const [dataplastique, setDataplastique] = useState(null)
       const [datapapier, setDatapapier] = useState(null)
       const [datacomposte, setDatacomposte] = useState(null)
       const [datacanette, setDatacanette] = useState(null)
       if (tableData !== null) {
           var plastique = tableData.plastique
           var papier = tableData.papier
           var composte = tableData.composte
           var canette = tableData.canette
           var annees = tableData.annee
           if (annee === undefined) {
                setAnnee(annees[0])
                setDatapapier(papier[0])
                setDataplastique(plastique[0])
                setDatacomposte(composte[0])
                setDatacanette(canette[0])
           } else {
                for (let i = 0; i < annees.length; i++) {
                    options.push({
                        value: annees[i],
                        datapapier: papier[i],
                        dataplastique: plastique[i],
                        datacomposte: composte[i],
                        datacanette: canette[i],
                    })
                }
                if (options.length !== 0) {
                    var onchangeSelect = (item) => {
                        setAnnee(item.value)
                        setDatapapier(item.datapapier)
                        setDataplastique(item.dataplastique)
                        setDatacomposte(item.datacomposte)
                        setDatacanette(item.datacanette)
                    }
                }
           }
       }
    if(tableData!==null){
      return (
        <div style={{display:"grid", gridTemplateColumns:"100%", padding:"20px"}}>
          <StyledTypography style={{margin:'10px 0'}}> Votre part des revenus des déchets collectés à votre établissement en Dinars en {annee} </StyledTypography>
          <div style={{width:"25%"}}>
            <Select onChange={onchangeSelect} value={annee} options={options} getOptionValue={(option) => option.value} getOptionLabel={(option) => option.value} placeholder={annee} />
          </div>
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