import React, { useState, useEffect } from 'react'
import { FaTrashAlt,FaBuilding ,FaTrash } from "react-icons/fa";
import {RiBuildingLine} from "react-icons/ri"
import PlastiqueDechet from '../../../../Global/images/plastique.PNG'
import PapierDechet from '../../../../Global/images/papier.PNG'
import CanetteDechet from '../../../../Global/images/canette.PNG'
import ComposteDechet from '../../../../Global/images/composte.PNG'
import ApartmentIcon from '@mui/icons-material/Apartment';
import Typography from '@mui/material/Typography'
import { Skeleton } from '@mui/material';
import CardGlobalDechet from './CardGlobalDechet';
import '../../assets/css/GlobalStatistiques.css'

const CardStatistique =( {data , nom ,icon})=>{
 return (
    <>
        <div style={{display:"flex" , justifyContent:"center"}}>   
            {icon}
            <Typography variant='h5' sx={{fontSize:"35px", fontWeight:"400", fontFamily:"Fredoka"}} >{data}</Typography>  
        </div>
        <Typography variant='p' sx={{fontSize:"16px", fontWeight:"500", fontFamily:"Fredoka"}} >{nom}</Typography>
    </>
 )
}

export default function D1GlobalStatistiques() {
    const [data, setData] = useState(null)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
    var requestOptions = {method: 'GET', headers: myHeaders, redirect: 'follow'};
    const getData = () => {
      fetch(`${process.env.REACT_APP_API_KEY}/api/auth-responsable-etablissement/dashboard-etablissement`, requestOptions).then(response => response.json())
      .then(result => setData(result)).catch(error => console.log('error', error)); 
    }
    useEffect(() => { getData()}, [])
    if(data!==null){
        return (
            <>
              <div className="container-globale-stat">
                <CardGlobalDechet color='rgb(78, 102, 241)' color3={'#4B7BE5'} 
                    type="Plastique" nbr_poubelle={data[0].poubelle_plastique} quantite_dechets={data[0].quantite_dechets_plastique}
                    pourcentage_qt_poubelle={data[1].pourcentage_qt_poubelle_plastique} image={PlastiqueDechet} somme_qt_dechet={data[1].somme_qt_dechet_plastique}               
                />

                <CardGlobalDechet color='#FF8D29' color3='#FF8D29' 
                    type="Papier"  nbr_poubelle={data[0].poubelle_papier} quantite_dechets={data[0].quantite_dechets_papier}
                    pourcentage_qt_poubelle={data[1].pourcentage_qt_poubelle_papier} image={PapierDechet} somme_qt_dechet={data[1].somme_qt_dechet_papier} 
                />
            
                <CardGlobalDechet color='rgb(0, 153, 74)' color3=' #3E7C17'
                    type="Composte"  nbr_poubelle={data[0].poubelle_composte} quantite_dechets={data[0].quantite_dechets_composte}
                    pourcentage_qt_poubelle={data[1].pourcentage_qt_poubelle_composte} image={ComposteDechet} somme_qt_dechet={data[1].somme_qt_dechet_composte}           
                />
        
                <CardGlobalDechet color='rgb(229, 49, 84)' color3='#F24C4C'
                    type="Canette"  nbr_poubelle={data[0].poubelle_canette} quantite_dechets={data[0].quantite_dechets_canette}
                    pourcentage_qt_poubelle={data[1].pourcentage_qt_poubelle_canette} image={CanetteDechet} somme_qt_dechet={data[1].somme_qt_dechet_canette}            
                />
              </div>
           <br/>
                <Typography variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"20px"}}>Données de mon établissement</Typography>
                <div className="card-dashboard" >     
                    <div className='container-stat'> 
                        <CardStatistique data={data[0].nbr_personnes} nom='Personnes'
                            icon={ <ApartmentIcon className='card-icon' style={{fontSize:"50px", color:'gray'}}/>}/>

                        <CardStatistique data={data[0].bloc_etablissements_count} nom="Blocs d'établissement"
                            icon={ <FaBuilding className='card-icon' style={{width:"30px",color:'gray'}}/>}/>

                        <CardStatistique data={data[0].etage_etablissements_count} nom="Etage d'établissement"
                            icon={ <RiBuildingLine className='card-icon' style={{width:"40px",color:'gray'}}/>}/>

                        <CardStatistique data={data[0].bloc_poubelles_count} nom='Bloc de Poubelles'
                            icon={ <FaTrashAlt className='card-icon' style={{width:"30px",color:'gray'}}/>}/>

                        <CardStatistique data={data[0].bloc_poubelles_count*4} nom='Total des Poubelles'
                            icon={ <FaTrash className='card-icon' style={{width:"30px",color:'gray'}}/>}/>

                    </div>
                </div>
            </>
        )
    }else{
        return (
            <>     
                <div className='container-globale-stat' >
                    <Skeleton variant="rectangular"  height={320}/>
                    <Skeleton variant="rectangular"  height={320}/>
                    <Skeleton variant="rectangular"  height={320}/>
                    <Skeleton variant="rectangular"  height={320}/>
                </div>
            </>
        );
    };
}
