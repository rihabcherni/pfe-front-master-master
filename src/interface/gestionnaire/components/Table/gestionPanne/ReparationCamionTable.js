import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
    ["ID","id"],
    ["Camion","camion_id"],
    ["Mecanicien","mecanicien_id"],
    ["Description panne","description_panne"],
    ["Cout","cout"],
    ["Date debut reparation","date_debut_reparation"],
    ["Date fin reparation","date_fin_reparation"],
    ["Crée le","created_at"],
    ["Modifié le","updated_at"],
  ];    

  const createUpdate=[
    ["ID","id"],
    ["Camion","camion_id"],
    ["Mecanicien","mecanicien_id"],
    ["Description panne","description_panne"],
    ["Cout","cout"],
    ["Date debut reparation","date_debut_reparation"],
    ["Date fin reparation","date_fin_reparation"],
  ]; 
export default function ReparationCamionTable() {
  const initialValue = { camion_id:"", id_mecanicien:"", description_panne:"", cout:"",date_debut_reparation:"",date_fin_reparation:"",created_at:"" ,error_list:[]};    
  const url = `${process.env.REACT_APP_API_KEY}/api/reparation-camion`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    {headerName: 'Détails pannes',  children: [{ headerName: "Photo", field: "photo", maxWidth:100, minWidth:100, cellRenderer: (params) =>
      <img  style={{height:"50px", width:"50px", borderRadius:"50%"}} 
        src={`${process.env.REACT_APP_API_KEY}/storage/images/panneCamion/${params.data.image_panne_camion}`}  alt="panne camion image" />},
      { headerName: "Description panne", field: "description_panne", maxWidth: 800 , minWidth:200 },
      { headerName: "Cout (DT)", field: "cout" , maxWidth: 180 , minWidth:120},
      { headerName: "Date debut reparation", field: "date_debut_reparation", maxWidth: 200 , minWidth:180},
      { headerName: "Date fin reparation", field: "date_fin_reparation", maxWidth: 200 , minWidth:180},
    ]},
    {headerName: 'Camion', cellStyle:{backgroundColor:"red"},children: [
        { field: 'camion_id' , maxWidth: 180 , minWidth:120 ,cellStyle:{backgroundColor:"#E8E8E8"},  filter: 'agTextColumnFilter'},
        { field: 'matricule' , maxWidth: 180 , minWidth:120,cellStyle:{backgroundColor:"#E8E8E8"} ,  filter: 'agTextColumnFilter'},
    ],},
    {headerName: 'Mecanicien',  children: [
        {headerName: 'Nom et prénom', field: 'mecanicien_nom_prenom' , maxWidth: 200 , minWidth:180 ,  filter: 'agTextColumnFilter', cellStyle:{backgroundColor:"#F0F8FF"}},
        {headerName: 'CIN', field: 'mecanicien_CIN' , maxWidth: 180 , minWidth:120 ,  filter: 'agTextColumnFilter', cellStyle:{backgroundColor:"#F0F8FF"}},
    ]},
  ]
  const columnDefsTrash = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    {headerName: 'Détails pannes',  children: [{ headerName: "Photo", field: "photo", maxWidth:100, minWidth:100, cellRenderer: (params) =>
      <img  style={{height:"50px", width:"50px", borderRadius:"50%"}} 
        src={`${process.env.REACT_APP_API_KEY}/storage/images/panneCamion/${params.data.image_panne_camion}`}  alt="panne camion image" />},
      { headerName: "Description panne", field: "description_panne", maxWidth: 800 , minWidth:200 },
      { headerName: "Cout (DT)", field: "cout" , maxWidth: 180 , minWidth:120},
      { headerName: "Date debut reparation", field: "date_debut_reparation", maxWidth: 200 , minWidth:180},
      { headerName: "Date fin reparation", field: "date_fin_reparation", maxWidth: 200 , minWidth:180},
    ]},
    {headerName: 'Camion', cellStyle:{backgroundColor:"red"},children: [
        { field: 'camion_id' , maxWidth: 180 , minWidth:120 ,cellStyle:{backgroundColor:"#E8E8E8"},  filter: 'agTextColumnFilter'},
        { field: 'matricule' , maxWidth: 180 , minWidth:120,cellStyle:{backgroundColor:"#E8E8E8"} ,  filter: 'agTextColumnFilter'},
    ],},
    {headerName: 'Mecanicien',  children: [
        {headerName: 'Nom et prénom', field: 'mecanicien_nom_prenom' , maxWidth: 200 , minWidth:180 ,  filter: 'agTextColumnFilter', cellStyle:{backgroundColor:"#F0F8FF"}},
        {headerName: 'CIN', field: 'mecanicien_CIN' , maxWidth: 180 , minWidth:120 ,  filter: 'agTextColumnFilter', cellStyle:{backgroundColor:"#F0F8FF"}},
    ]},
  ]
    return (
      <div style={{width:"100%"}}>
        <Api tableNameSing='Réparation camion' tableNamePlu='Réparations camions' url={url} 
          initialValue={initialValue} columnDefs={columnDefs} columnDefsTrash={columnDefsTrash} 
          show={show} createUpdate={createUpdate}/>  
      </div>
    );
  }
      










