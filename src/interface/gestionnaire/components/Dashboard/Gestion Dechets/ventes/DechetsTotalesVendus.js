import React, { useState, useEffect } from 'react'
import '../../../../css/dechetCard.css'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

const DechetsURL = `${process.env.REACT_APP_API_KEY}/api/somme-dechets-vendus`

export default function DechetsTotalesVendus() {
    const [dechets, setDechets] = useState([])
    useEffect(() => {
        ;(async function getStatus() {
          const vdata = await fetch(DechetsURL)
          const vjson = await vdata.json()
    
          setTimeout(getStatus, 60000)
          setDechets(vjson)
        })()
      }, [])

    return (
    <>
        <div className='card-container4'>
            <Card sx={{backgroundColor:"#321fdb" , textAlign:"center", fontSize:"18px",padding:"10px",color:"white"}}  className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                <Typography>Quantité Vendu Totale Plastique</Typography>
                <Typography>
                    {dechets.somme_totale_plastique} Kg
                </Typography>
            </Card>
            <Card sx={{backgroundColor:"#f9b115", textAlign:"center", fontSize:"18px",padding:"10px",color:"white"}} className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                <Typography>Quantité Vendu Totale Papier</Typography>
                <Typography>
                    {dechets.somme_totale_papier} Kg
                </Typography>
            </Card>
            <Card sx={{backgroundColor:"#e55353", textAlign:"center", fontSize:"18px",padding:"10px",color:"white"}} className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                <Typography>Quantité Vendu Totale Canette</Typography>
                <Typography>
                    {dechets.somme_totale_canette} Kg
                </Typography>
            </Card> 
            <Card sx={{backgroundColor:"#2eb85c", textAlign:"center", fontSize:"18px",padding:"10px",color:"white"}} className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                <Typography>Quantité Vendu Totale Composte</Typography>
                <Typography>
                    {dechets.somme_totale_composte} Kg
                </Typography>
            </Card>
        </div>
        <br/>
    </>
    )
}