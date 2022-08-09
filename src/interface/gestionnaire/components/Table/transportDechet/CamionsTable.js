import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
const show=[
  ["ID","id"],
  ["Zone travail","zone_travail_id"],
  ["Zone depot","zone_depot_id"],
  ["Matricule","matricule"],
  ["Volume maximale camion","volume_maximale_camion"],
  ["Volume actuelle plastique","volume_actuelle_plastique"],
  ["Volume actuelle papier","volume_actuelle_papier"],
  ["Volume actuelle composte","volume_actuelle_composte"],
  ["Volume actuelle canette","volume_actuelle_canette"],
  ["Volume carburant consomme","volume_carburant_consomme"],
  ["Longitude","longitude"],
  ["Latitude","latitude"],
  ["Heure de sortie","heure_sortie"],
  ["Heure d'entrée","heure_entree"],
  ["Kilometrage","Kilometrage"],
  ["Crée le","created_at"],
  ["Modifié le","updated_at"],
];

const createUpdate=[
  ["ID","id"],
  ["Zone travail","zone_travail_id"],
  ["Zone depot","zone_depot_id"],
  ["Matricule","matricule"],
  ["Volume maximale camion","volume_maximale_camion"],
  ["Volume actuelle plastique","volume_actuelle_plastique"],
  ["Volume actuelle papier","volume_actuelle_papier"],
  ["Volume actuelle composte","volume_actuelle_composte"],
  ["Volume actuelle canette","volume_actuelle_canette"],
  ["Volume carburant consomme","volume_carburant_consomme"],
  ["Longitude","longitude"],
  ["Latitude","latitude"],
  ["Heure de sortie","heure_sortie"],
  ["Heure d'entrée","heure_entree"],
  ["Kilometrage","Kilometrage"],
]; 
export default function CamionsTable() {
  const initialValue = { zone_travail_id:"",zone_depot_id:"", matricule:"", volume_maximale_camion:"",longitude:"", latitude:"",heure_sortie:"",heure_entree:"",volume_maximale_poubelle:"",
  volume_actuelle_plastique:"",volume_actuelle_papier:"",volume_actuelle_composte:"",volume_actuelle_canette:"",volume_carburant_consomme:"",Kilometrage:"",created_at:"", updated_at:"",error_list:[]};    
   
  const url = `http://127.0.0.1:8000/api/camion`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    {headerName: 'Détails Zone de travil',  children: [ 
      { headerName: "id", field: "zone_travail_id", maxWidth:90, minWidth:70},
      { headerName: "Region", field: "zone_travail.region", maxWidth:180, minWidth:140},
  
    ]},
    {headerName: 'Détails Zone de depot',  children: [ 
      { headerName: "id", field: "zone_depot_id", maxWidth:90, minWidth:70},
      { headerName: "Adresse", field: "zone_depot.adresse", maxWidth:500, minWidth:200},
    ]},
    {headerName: 'Détails Camion',  children: [ 
      { headerName: "Matricule", field: "matricule", maxWidth:180, minWidth:140},
      { headerName: "Volume maximale camion (L)", field: "volume_maximale_camion", maxWidth:300, minWidth:220},
      { headerName: "Volume actuelle plastique (L)", field: "volume_actuelle_plastique", maxWidth:300, minWidth:220,cellStyle: {color: 'rgb(18, 102, 241)'}},
      { headerName: "Volume actuelle papier (L)", field: "volume_actuelle_papier", maxWidth:300, minWidth:220,cellStyle: {color:'rgb(255, 173, 13)'}},
      { headerName: "Volume actuelle composte (L)", field: "volume_actuelle_composte", maxWidth:300, minWidth:240,cellStyle: {color:  'rgb(0, 183, 74)'}},
      { headerName: "Volume actuelle canette (L)", field: "volume_actuelle_canette", maxWidth:300, minWidth:220,cellStyle: {color:'rgb(249, 49, 84)'}},
      { headerName: "Volume carburant consomme (L)", field: "volume_carburant_consomme", maxWidth:300, minWidth:260},
      { headerName: "Longitude", field: "longitude", maxWidth:250, minWidth:140},
      { headerName: "Latitude", field: "latitude", maxWidth:200, minWidth:140},
      { headerName: "Heure de sortie", field: "heure_sortie", maxWidth:250, minWidth:200},
      { headerName: "Heure d'entrée", field: "heure_entree", maxWidth:250, minWidth:200},
      { headerName: "Kilometrage (KM)", field: "Kilometrage", maxWidth:200, minWidth:170}
    ]},
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center" style={{color:"green", fontSize:"30px"}}>Camions</h2>
      <Api tableName='Camion' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/> 
    </div>
  );
}
 