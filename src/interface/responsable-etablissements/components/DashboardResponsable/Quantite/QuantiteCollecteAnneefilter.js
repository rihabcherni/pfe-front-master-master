import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import {TailSpin} from 'react-loader-spinner'
import Select from 'react-select'
import { StyledTypography } from "../../../../../style";
import { Paper} from '@mui/material'
import { styled } from '@mui/material/styles';
export const Item = styled(Paper)(({ theme }) => ({backgroundColor: theme.palette.mode === 'dark' ?'#2c2c2c' : '#fff',
  border:' 2px solid #f0f0f0', ...theme.typography.body2, padding: "10px 20px", color: theme.palette.text.secondary})
);
export default function QuantiteCollecteAnneefilter () {
  var myHeaders = new Headers();
  myHeaders.append("Authorization",  `Bearer ${localStorage.getItem('auth_token')}`);   
  var requestOptions = { method: 'GET', headers: myHeaders, redirect: 'follow'};   
  const [tableData,setTableData] = useState(null)
  const [chart, setChart] = useState(null)
  const chartOptions = () => {
    setChart ({
        options: {
          legend: {position: 'top',fontSize:"14px", fontWeight:700, labels: { colors: 'green'}},
          tooltip: {  style: { fontSize: '14px', fontWeight:900 }}, 
          labels: ['plastique','composte', 'papier', 'canette'],
          responsive: [ { breakpoint: 480 }],
          dataLabels: { enabled: true, style: { colors: ['#fff'], fontWeight: 'bold', fontSize:"12px" }},
          plotOptions: { pie: { customScale: 1, donut: { size: '55%', labels: { show: true}}}}
        }});
    }
    const getData = () => {fetch("http://127.0.0.1:8000/api/auth-responsable-etablissement/quantite-responsable-annee", requestOptions).then(response => response.json()).then(result => setTableData(result)).catch(error => console.log('error', error));}  
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
       console.log(dataplastique)
    if(tableData!==null){
      return (
        <Item>
            <div style={{display:"grid", gridTemplateColumns:"100%"}}>
                <StyledTypography style={{margin:"10px 0"}}>Quantité des déchets collectés à votre établissement KG en {annee} </StyledTypography>
                <div style={{width:"35%"}}>
                  <Select onChange={onchangeSelect} value={annee} options={options} 
                    getOptionValue={(option) => option.value} getOptionLabel={(option) => option.value} placeholder={annee} />
                </div>
                <>
                  <ReactApexChart  options={chart.options} type="donut" series={[dataplastique, datacomposte, datapapier, datacanette]}/>          
                </>
            </div>
        </Item>
      );
    }else{
      return (
        <div className='container-prix' style={{margin:"10% 30% 5%", verticalAlign:"center"}}>
           <TailSpin height="150" width="150" color='green' ariaLabel='loading' />
        </div>
      );
    };
}