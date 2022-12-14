import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { Card, Container } from '@mui/material';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { QuantiteDechetAcheteMoislUrl } from '../../../../URLBackend/Client_dechet';
import {StyledTypography} from '../../../../style'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const QuantiteDechetAcheteMois = () => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization",  `Bearer ${localStorage.getItem('auth_token')}`);   
  var requestOptions = { method: 'GET', headers: myHeaders, redirect: 'follow'};   
    const [quantitemois, setQuantiteMois] = useState([])
    useEffect(() => {
        ;(async function getStatus() {
        const response = await fetch(QuantiteDechetAcheteMoislUrl,requestOptions)
        const json = await response.json()
        setTimeout(getStatus, 60000)
        setQuantiteMois(json)
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
            <Card sx={{width: "95%",margin: "0 auto"}}>
                <Container>
                    <StyledTypography style={{margin:"10px 0"}}>Quantit??s de d??chets  totales achet??es par mois/ann??e </StyledTypography>
                    <div style={{width:"25%"}}>
                        <Select   onChange={onchangeSelect} value={annee} options={options} 
                            getOptionValue={(option) => option.value} getOptionLabel={(option) => option.value} placeholder={annee} />
                    </div>
                </Container>
                <Bar   options={{ 
                    responsive: true,
                    plugins: {  legend: { position: 'top' },  title: { display: false,text: 'Quantit??es collect??es totales par mois/ann??e et par ??tablissement'},},
                }} 
                data={{  labels: ['Janvier', 'F??vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre','Octobre','Novembre','Decembre'],
                    datasets: [
                        {label: 'Plastique', data: dataplastique, backgroundColor: '#321fdb' },
                        {label: 'Papier', data: datapapier, backgroundColor: '#f9b115'},
                        {label: 'Composte', data: datacomposte, backgroundColor: '#2eb85c'},
                        {label: 'Canette', data: datacanette, backgroundColor: '#e55353' },
                    ],
                }} />
            </Card>
        </div>
    );
}
export default QuantiteDechetAcheteMois;