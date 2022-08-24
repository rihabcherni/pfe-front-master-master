import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { Card, Container, Grid } from '@mui/material';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {StyledTypography} from '../../../../style'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TotalDechetCollectéMois = () => {
    const [quantitemois, setQuantiteMois] = useState([])
    useEffect(() => {
        ;(async function getStatus() {
        const response = await fetch(`${process.env.REACT_APP_API_KEY}/api/somme-dechets-depot-par-mois`)
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
                    <StyledTypography style={{margin:"10px 0"}}>Quantités de déchets collectées totales par mois/année </StyledTypography>
                    <div style={{width:"25%"}}>
                        <Select   onChange={onchangeSelect} value={annee} options={options} 
                            getOptionValue={(option) => option.value} getOptionLabel={(option) => option.value} placeholder={annee} />
                    </div>
                </Container>
                <Bar   options={{ 
                    responsive: true,
                    plugins: {  legend: { position: 'top' },  title: { display: false,text: 'Quantitées collectées totales par mois/année et par établissement'},},
                }} 
                data={{  labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre','Octobre','Novembre','Decembre'],
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
export default TotalDechetCollectéMois;