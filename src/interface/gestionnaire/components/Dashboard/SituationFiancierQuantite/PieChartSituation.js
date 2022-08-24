import React, { useState, useEffect } from 'react'
import { Card, Container, Typography, Grid } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {StyledTypography} from '../../../../../style'
ChartJS.register(ArcElement, Tooltip, Legend);
const PiechartSituation = () => {
    const [dechets, setDechets] = useState([])
    useEffect(() => {
        ;(async function getStatus() {
        const response = await fetch(`${process.env.REACT_APP_API_KEY}/api/dechets`)
        const json = await response.json()
        setTimeout(getStatus, 60000)
        setDechets(json.data)
        })()
    }, [])
    const types = dechets.map((x) => x.type_dechet )
    const revenus = dechets.map((x) => x.prix_unitaire )
    const options = {
        responsive: true,plugins: { legend: { position: 'top',display: true }},
        cutoutPercentage: 60,
        animation: {
          animateScale: true
        },
        rotation: 0.75 * Math.PI,
      };
    const data = {
        labels: types,
        datasets: [
            {                
                label: "Revenu", data: revenus, 
                labelSuffix: "KG",
                backgroundColor: ['rgb(78, 102, 241)', 'rgb(0, 153, 74)', 'rgb(245, 173, 13)', 'rgb(229, 49, 84)'],
                borderColor: ['rgb(120, 197, 255)', '#6ECB63','#FFCD38', '#FF9999'],borderWidth: 1,
            },
        ],
    };
    return (
        <div>
            <Card>
                <Container>
                    <StyledTypography style={{margin:'10px 0'}}>Revenus totales collectés par type de déchet</StyledTypography>
                </Container>
                <div style={{ padding:"0 30px 20px"}}>
                  <Doughnut   data={data} options={options}/>
                </div>
            </Card>
        </div>
    );
}
export default PiechartSituation;