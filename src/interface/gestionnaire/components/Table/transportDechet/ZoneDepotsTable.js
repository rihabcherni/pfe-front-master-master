 import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["ID","id"],
            ["Adresse","adresse"],
            ["Longitude","longitude"],
            ["Latitude","latitude"],
            ["Quantité depot maximale","quantite_depot_maximale"],
            ["Quantité depot actuelle plastique","quantite_depot_actuelle_plastique"],
            ["Quantité depot actuelle papier","quantite_depot_actuelle_papier"],
            ["Quantité depot actuelle composte","quantite_depot_actuelle_composte"],
            ["Quantité depot actuelle canette","quantite_depot_actuelle_canette"],
            ["Crée le","created_at"],
            ["Modifié le","updated_at"],
          ];
  
  const createUpdate=[
    ["ID","id"],
    ["Adresse","adresse"],
    ["Longitude","longitude"],
    ["Latitude","latitude"],
    ["Quantité depot maximale","quantite_depot_maximale"],
    ["Quantité depot actuelle plastique","quantite_depot_actuelle_plastique"],
    ["Quantité depot actuelle papier","quantite_depot_actuelle_papier"],
    ["Quantité depot actuelle composte","quantite_depot_actuelle_composte"],
    ["Quantité depot actuelle canette","quantite_depot_actuelle_canette"],
];
export default function ZoneDepotsTable() {
  const initialValue = { adresse:"" ,longitude:"" ,latitude:"", quantite_depot_maximale:"",quantite_depot_actuelle_plastique:"",
  quantite_depot_actuelle_papier:"",quantite_depot_actuelle_composte:"",quantite_depot_actuelle_canette:"",created_at:"", updated_at:"",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/zone-depot`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Adresse", field: "adresse", maxWidth:500, minWidth:200},
    { headerName: "Longitude", field: "longitude", maxWidth:220, minWidth:120},
    { headerName: "Latitude", field: "latitude", maxWidth:220, minWidth:120},
    { headerName: "Quantité depot maximale", field: "quantite_depot_maximale", maxWidth:220, minWidth:200},
    { headerName: "Quantité depot plastique", field: "quantite_depot_actuelle_plastique", maxWidth:220, minWidth:200,cellStyle: {color: 'rgb(18, 102, 241)'}},
    { headerName: "Quantité depot papier", field: "quantite_depot_actuelle_papier", maxWidth:220, minWidth:200,cellStyle: {color:'rgb(255, 173, 13)'}},
    { headerName: "Quantité depot composte", field: "quantite_depot_actuelle_composte", maxWidth:220, minWidth:200,cellStyle: {color:  'rgb(0, 183, 74)'}},
    { headerName: "Quantité depot canette", field: "quantite_depot_actuelle_canette", maxWidth:220, minWidth:200,cellStyle: {color:'rgb(249, 49, 84)'}},
  ]
  return (
    <div style={{width:"100%"}}>
      <Api tableNameSing='Zone de depots' tableNamePlu='Zones de depots' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/>   
    </div>
  );
}