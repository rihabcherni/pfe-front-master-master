import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["ID","id"],
            ["Zone depot","zone_depot_id"],
            ["Camion","camion_id"],
            ["Date depot","date_depot"],
            ["Quantité deposé plastique","quantite_depose_plastique"],
            ["Quantité deposé papier","quantite_depose_papier"],
            ["Quantité deposé canette","quantite_depose_canette"],
            ["Quantité deposé composte","quantite_depose_composte"],
            ["Crée le","created_at"],
            ["Modifié le","updated_at"],
           ];  
           
  const createUpdate=[
            ["ID","id"],
            ["Zone depot","zone_depot_id"],
            ["Camion","camion_id"],
            ["Date depot","date_depot"],
            ["Quantité deposé plastique","quantite_depose_plastique"],
            ["Quantité deposé papier","quantite_depose_papier"],
            ["Quantité deposé canette","quantite_depose_canette"],
            ["Quantité deposé composte","quantite_depose_composte"],
           ];  
export default function DepotTable() {
  const initialValue = { zone_depot_id:"", camion_id:"", date_depot:"", quantite_depose_plastique:"", quantite_depose_papier:"", quantite_depose_canette:"", quantite_depose_composte:"",created_at:"", updated_at:"",error_list:[]};    
  const url = `${process.env.REACT_APP_API_KEY}/api/depot`
    const columnDefs = [
      { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
      {headerName: 'Détails Camion',  children: [ 
        { headerName: "Id", field: "zone_depot_id", maxWidth:70, minWidth:70},
        { headerName: "Adresse", field: "zone_depot.adresse", maxWidth:500, minWidth:150},
      ]},
      {headerName: 'Détails Camion',  children: [ 
        { headerName: "Id", field: "camion_id", maxWidth:70, minWidth:70},
        { headerName: "Matricule", field: "camion.matricule", maxWidth:200, minWidth:150},
      ]},
        {headerName: 'Quantité deposé ',  children: [ 
        { headerName: "plastique", field: "quantite_depose_plastique", maxWidth:220, minWidth:110,cellStyle: {color: 'rgb(18, 102, 241)'}},
        { headerName: "papier", field: "quantite_depose_papier", maxWidth:220, minWidth:110,cellStyle: {color:'rgb(255, 173, 13)'}},
        { headerName: "canette", field: "quantite_depose_canette", maxWidth:220, minWidth:110,cellStyle: {color:'rgb(249, 49, 84)'}},
        { headerName: "composte", field: "quantite_depose_composte", maxWidth:220, minWidth:120,cellStyle: {color:  'rgb(0, 183, 74)'}},
      ]},
        { headerName: "Date depot", field: "date_depot", maxWidth:220, minWidth:180},
    ]
  return (
    <div style={{width:"100%"}}>
      <Api tableNameSing='dépot' tableNamePlu='dépots' url={url} initialValue={initialValue} 
      columnDefs={columnDefs} columnDefsTrash={columnDefs} show={show} createUpdate={createUpdate}/>  
    </div>
  );
}