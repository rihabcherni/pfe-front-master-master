import React from 'react'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles';
import CirculairePourcentage from '../../../../Global/CirculairePourcentage/CirculairePourcentage';
import { Box } from '@mui/material';
export default function CardGlobalDechet({color,color3, type,quantite_dechets ,nbr_poubelle,
  pourcentage_qt_poubelle, image, somme_qt_dechet}) {
  const BoxCard = styled(Box)(({ theme }) => ({backgroundColor: theme.palette.mode === 'dark' ? color3:  color, borderRadius:"10px", textAlign:"center", padding:"7px", color:'white',margin:"3px 0px",}));
  return (
    <div className="card-globale-stat" style={{borderLeft:`10px solid ${color}`}}>
        <div>
            <Typography variant='h5' sx={{textAlign:'center', color:{color}, fontFamily:"Fredoka"}}>{type}</Typography>
            <div className='globale-stat-container3'>
                <BoxCard > 
                    <Typography variant='h6' >{nbr_poubelle}</Typography>  
                    <Typography variant='body2'>Nombre poubelles</Typography>
                </BoxCard>  
                <BoxCard>
                    <Typography variant='h6'>{quantite_dechets}KG</Typography>  
                    <Typography variant='body2'>Quantité totale collecté</Typography>
                </BoxCard>
                <BoxCard>
                    <Typography variant='h6' >{somme_qt_dechet}KG</Typography>  
                    <Typography variant='body2'>Quantité totale actuelle</Typography>
                </BoxCard>
            </div>
            <BoxCard className='container_taux'>
                <CirculairePourcentage percentage={pourcentage_qt_poubelle} image={image}/>
                <Typography variant='h6' >Taux de remplissage poubelles</Typography>
            </BoxCard>                                                                    
        </div>
    </div>
  )
}
