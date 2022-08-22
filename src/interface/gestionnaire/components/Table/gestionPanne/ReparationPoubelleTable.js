import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
const show=[
    ["ID","id"],
    ["Poubelle","poubelle_id"],
    ["Réparateur poubelle","reparateur_poubelle_id"],
    ["Description panne","description_panne"],
    ["Cout","cout"],
    ["Date debut reparation","date_debut_reparation"],
    ["Date fin reparation","date_fin_reparation"],
    ["Crée le","created_at"],
    ["Modifié le","updated_at"],
  ];
  
  const createUpdate=[
    ["ID","id"],
    ["Poubelle","poubelle_id"],
    ["Réparateur poubelle","reparateur_poubelle_id"],
    ["Description panne","description_panne"],
    ["Cout","cout"],
    ["Date debut reparation","date_debut_reparation"],
    ["Date fin reparation","date_fin_reparation"],
  ]; 
export default function ReparationPoubelleTable() {
  const initialValue = { id_poubelle:"", id_reparateur_poubelle:"", description_panne:"", cout:"",date_debut_reparation:"",date_fin_reparation:"",created_at:"", updated_at:"",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/reparation-poubelle`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    {headerName: 'Détails pannes',  children: [ { headerName: "Photo", field: "photo", maxWidth:100, minWidth:100, cellRenderer: (params) =>
    <img  style={{height:"50px", width:"50px", borderRadius:"50%"}} 
        src={`http://127.0.0.1:8000/storage/images/pannePoubelle/${params.data.image_panne_poubelle}`}  alt="panne poubelle image" />},
    { headerName: "Description panne", field: "description_panne", maxWidth: 800 , minWidth:200 },
    { headerName: "Cout (DT)", field: "cout" , maxWidth: 180 , minWidth:120},
    { headerName: "Date debut reparation", field: "date_debut_reparation", maxWidth: 200 , minWidth:180},
    { headerName: "Date fin reparation", field: "date_fin_reparation", maxWidth: 200 , minWidth:180} ]},

    {headerName: 'Détails poubelle',  children: [ { headerName: "id", field: "poubelle_id", maxWidth: 100 , minWidth:80},
    { headerName: "nom", field: "nom_poubelle", maxWidth: 250 , minWidth:200},
    { headerName: "type", field: "type", maxWidth: 180 , minWidth:120},]},   
       
    {headerName: 'Détails Réparateur poubelle',  children: [ 
      { headerName: "id", field: "reparateur_poubelle_id", maxWidth: 110 , minWidth:90},
      { headerName: "nom et prénom", field: "reparateur_nom_prenom", maxWidth: 220 , minWidth:150},
      { headerName: "CIN", field: "reparateur_cin", maxWidth: 220 , minWidth:120},]},
    ]
  return (
    <div style={{width:"100%"}}>
        <Api tableNameSing='Réparation poubelle' tableNamePlu='Réparations poubelles' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/> 
    </div>
  );
}
      
