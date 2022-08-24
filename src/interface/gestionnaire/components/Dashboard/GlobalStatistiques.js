import React, { useState, useEffect } from 'react'
import '../../css/dechetCard.css'
import Typography from '@mui/material/Typography'
import { FaTrashAlt,FaUserAlt,FaBuilding ,FaTrash, FaUserTie,FaTruckMoving } from "react-icons/fa";
import {RiBuildingLine} from "react-icons/ri"
import { MdOutlineRecycling} from "react-icons/md";
import { TiSpanner} from "react-icons/ti";
import EngineeringIcon from '@mui/icons-material/Engineering';
import ZoneDepotImg from '../../../../Global/images/zoneDepot.svg'
import PlastiqueDechet from '../../../../Global/images/plastique.PNG'
import PapierDechet from '../../../../Global/images/papier.PNG'
import CanetteDechet from '../../../../Global/images/canette.PNG'
import ComposteDechet from '../../../../Global/images/composte.PNG'
import ApartmentIcon from '@mui/icons-material/Apartment';
import PinDropIcon from '@mui/icons-material/PinDrop';
const CardStatistique =( {data , nom ,icon})=>{
 return (
    <div>
        <div style={{display:"flex" , justifyContent:"center"}}>   
            {icon}<Typography color="primary" variant='h5' sx={{fontSize:"30px",marginTop:"-10px", fontWeight:"500", fontFamily:"Fredoka"}}  >{data}</Typography>  
        </div>
        <Typography variant='p' sx={{fontSize:"14px",fontWeight:"500", fontFamily:"Fredoka"}} color="primary">{nom}</Typography>
    </div>
 )
}
export default function GlobalStatistiques() {
    const dashboardURL = `${process.env.REACT_APP_API_KEY}/api/dashboard`
    const [data, setData] = useState([])
    useEffect(() => {
        ;(async function getStatus() {
          const vdata = await fetch(dashboardURL)
          const vjson = await vdata.json()
    
          setTimeout(getStatus, 60000)
          setData(vjson)
        })()
      }, [])
  return (
    <div>
        <div className="container2">
            <div className="card-dashboard">
                <Typography color="orange" variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"20px"}}>Gestion du stocks poubelles</Typography>
                <div className="card-div4">
                        <CardStatistique data={data.nbr_poubelle_plastique} nom='Poubelle plastique'
                            icon={ <img src={PlastiqueDechet} className='card-icon' style={{fontSize:"50px", color:"green", width:'70px'}}/>}/>
                        <CardStatistique data={data.nbr_poubelle_papier} nom='Poubelle papier'
                            icon={ <img src={PapierDechet} className='card-icon' style={{color:"green" , width:'75px'}}/>}/>

                        <CardStatistique data={data.nbr_poubelle_canette} nom='Poubelle canette'
                            icon={ <img src={CanetteDechet} className='card-icon' style={{color:"green" , width:'55px'}}/>}/>
                       
                        <CardStatistique data={data.nbr_poubelle_composte} nom='Poubelle composte'
                            icon={ <img src={ComposteDechet} className='card-icon' style={{color:"green" , width:'60px'}}/>}/>
                </div>    
            </div>
            <div className="card-dashboard" >
                <Typography color="orange" variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"20px"}}>Gestion du stocks déchets (kg)</Typography>
                <div className="card-div4">
                        <CardStatistique data={data.qt_dechet_plastique} nom='Déchets plastique'
                            icon={ <img src={PlastiqueDechet} className='card-icon' style={{color:"green" , width:'70px'}}/>}/>
                        <CardStatistique data={data.qt_dechet_papier} nom='Déchets papier '
                            icon={ <img src={PapierDechet} className='card-icon' style={{color:"green" , width:'75px'}}/>}/>
                    
                        <CardStatistique data={data.qt_dechet_canette} nom='Déchets canette '
                            icon={ <img src={CanetteDechet} className='card-icon' style={{color:"green" , width:'55px'}}/>}/>

                        <CardStatistique data={data.qt_dechet_composte} nom='Déchets composte'
                            icon={ <img src={ComposteDechet} className='card-icon' style={{color:"green" , width:'60px'}}/>}/>
                            
                </div>    
            </div> 
        </div>
    
        <div className="container">
            <div className="card-dashboard" >
                <Typography color="orange" variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"20px"}}>Gestion des ressources humaines</Typography>
                <div className="card-div">
                    <CardStatistique data={data.nbr_ouvrier} nom='Ouvriers' 
                        icon={ <FaUserAlt className='card-icon' style={{color:'#0025ff'}}/>}/>
                    <CardStatistique data={data.nbr_client_dechet} nom='Acheteurs Déchets'
                        icon={ <FaUserTie className='card-icon' style={{color:'green'}}/>}/>
                    <CardStatistique data={data.nbr_mecanicien} nom='Mécaniciens'
                        icon={ <EngineeringIcon className='card-icon' sx={{color:'red', fontSize:"60px "}}/>}/>
                    <CardStatistique data={data.nbr_fournisseur} nom='Fournisseurs'
                        icon={ <FaUserAlt className='card-icon' style={{color:'#0025ff'}}/>}/>
                
                    <CardStatistique data={data.nbr_responsable_etablissement} nom="Responsables d'établissment"
                        icon={ <FaUserTie className='card-icon' style={{color:'green'}}/>}/>
                    <CardStatistique data={data.nbr_reparteur_poubelle} nom='Réparateurs poubelles'
                        icon={ <EngineeringIcon className='card-icon' sx={{color:'red',fontSize:"60px "}}/>}/>

                </div>    
            </div>
            <div className="card-dashboard" >
                <Typography color="orange" variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"20px"}}>Gestion des établissement</Typography>
                <div className="card-div">
                    <CardStatistique data={data.nbr_zone_travail} nom='Zones de travail'
                        icon={ <PinDropIcon className='card-icon' sx={{fontSize:"50px",color:'gray'}}/>}/>

                    <CardStatistique data={data.nbr_etablissement} nom='Etablissements'
                        icon={  <ApartmentIcon className='card-icon' style={{fontSize:"50px",color:'gray'}}/>}/>

                    <CardStatistique data={data.nbr_bloc_etablissement} nom='Blocs'
                        icon={ <FaBuilding className='card-icon' style={{width:"30px",color:'gray'}}/>}/>


                    <CardStatistique data={data.nbr_etage_etablissement} nom='Etages'
                        icon={ <RiBuildingLine className='card-icon' style={{width:"40px",color:'gray'}}/>}/>

                    <CardStatistique data={data.nbr_bloc_poubelle} nom='Blocs Poubelles'
                        icon={ <FaTrashAlt className='card-icon' style={{width:"40px",color:'gray'}}/>}/>

                    <CardStatistique data={data.nbr_poubelle_vendus} nom='Poubelles en Terrain'
                        icon={ <FaTrash className='card-icon' style={{width:"40px",color:'gray'}}/>}/>
                </div>    
            </div>
            
            <div className="card-dashboard" >
                <Typography color="orange" variant='h5' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"20px"}}>Gestion du Transport déchets</Typography>
                <div className="card-div">
                    <CardStatistique data={data.nbr_zone_depot} nom='Zones de dépots'
                        icon={ <PinDropIcon className='card-icon' sx={{fontSize:50, color:'green'}}/>}/>
                    <CardStatistique data={data.nbr_depot} nom='Dépots'
                        icon={ <img src={ZoneDepotImg} className='card-icon' style={{width:"55px" , margin:"5px 0 -10px",color:'green'}}/>}/>
                    <CardStatistique data={data.nbr_camion} nom='Camion'
                        icon={ <FaTruckMoving className='card-icon' style={{color:'green'}}/>}/>
                </div> 
                
                <div className='container2'>
                  <div>
                    <Typography color="orange" variant='h6' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"8px"}}>Gestion commandes</Typography>
                    <div style={{textAligne:"center"}}>
                        <CardStatistique data={data.nbr_commande_dechet} nom='Commandes déchets'
                            icon={ <MdOutlineRecycling className='card-icon' style={{color:'green'}}/>}/>
                    </div>   
                  </div>
                  <div>
                    <Typography color="orange" variant='h6' sx={{fontWeight:"600", fontFamily:"Fredoka", marginBottom:"8px"}}>Gestion des pannes</Typography>
                    <div className="container2">
                        <CardStatistique data={data.nbr_panne_poubelle} nom='Pannes poubelles'
                            icon={ <TiSpanner className='card-icon' style={{color:'red'}}/>}/>
                        <CardStatistique data={data.nbr_panne_camion} nom='Pannes camions'
                            icon={ <TiSpanner className='card-icon' style={{color:'red'}}/>}/>
                    </div>  
                   </div> 
                </div> 
 
            </div>
        </div>
    </div>
  )
}
