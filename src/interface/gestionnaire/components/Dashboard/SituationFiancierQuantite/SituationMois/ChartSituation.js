import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { Card, Container, Typography } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Filler, Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {StyledTypography} from '../../../../../../style'
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Filler, Title, Tooltip, Legend);

const ChartSituation = ({url , title}) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
    
    var requestOptions = { method: 'GET', headers: myHeaders,redirect: 'follow'};
    const [quantitemois, setQuantiteMois] = useState([])

    useEffect(() => {
        ;(async function getStatus() {
        const response = await fetch(url,requestOptions)
        const json = await response.json()
        setQuantiteMois(json)
        setTimeout(getStatus, 60000)
        })()
    }, [])
    var options = []
    const [annee, setAnnee] = useState()
    const [dataplastique, setDataplastique] = useState([])
    const [datapapier, setDatapapier] = useState([])
    const [datacomposte, setDatacomposte] = useState([])
    const [datacanette, setDatacanette] = useState([])

    if (quantitemois.length !== 0) {
        var plastique = quantitemois.plastique
        var papier = quantitemois.papier
        var composte = quantitemois.composte
        var canette = quantitemois.canette
        var annees = quantitemois.annee

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
    return (
     <div>
      <Card >
        <Container>
          <StyledTypography align="center" style={{margin:'10px 0'}}>{title} en   {annee} </StyledTypography>
          <div style={{width:"20%", margin:'10px 0', fontSize:"12px", textAlign:"left"}}>
            <Select onChange={onchangeSelect} value={annee} options={options} getOptionValue={(option) => option.value} getOptionLabel={(option) => option.value} placeholder={annee ? annee : "Année"}/>
          </div>
        </Container>
        <Bar options={{ responsive: true, plugins: { legend:{ position:'top'},title:{display: false, text: 'Revenus des déchets vendus par année' },},}} 
            data={{labels:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
                datasets:[
                  {label: 'Plastique', data: dataplastique, backgroundColor: 'rgb(50 , 31 , 219 , 0.5)', borderColor: 'rgb(50, 31, 219)', fill: true},
                  {label: 'Papier', data: datapapier, backgroundColor: 'rgb(249,177,21, 0.5)', borderColor: 'rgb(249,177,21)', fill: true},
                  {label: 'Composte', data: datacomposte, backgroundColor: 'rgb(46, 184, 92 , 0.5)', borderColor: 'rgb(46, 184, 92)', fill: true },
                  {label: 'Canette', data: datacanette, backgroundColor: 'rgb(229,83,83, 0.5)', borderColor: 'rgb(229,83,83)', fill: true, },
                ],
            }}/>
       </Card>
     </div>
    );
}
export default ChartSituation;