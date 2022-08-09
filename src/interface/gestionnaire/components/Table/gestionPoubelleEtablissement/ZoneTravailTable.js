import React from 'react';
import '../../../../../App.css';
import Api from '../../../../../Global/ComponentsTable/Api';

 const show=[
  ["ID","id"],
  ["Region","region"],
  ["Quantité total collecté plastique","quantite_total_collecte_plastique"],
  ["Quantité total collecté composte","quantite_total_collecte_composte"],
  ["Quantité total collecté papier","quantite_total_collecte_papier"],
  ["Quantité total collecté canette","quantite_total_collecte_canette"],
  ["Crée le","created_at"],
  ["Modifié le","updated_at"],
 ];

 const createUpdate=[
  ["ID","id"],
  ["Region","region"],
  ["Quantité total collecté plastique","quantite_total_collecte_plastique"],
  ["Quantité total collecté composte","quantite_total_collecte_composte"],
  ["Quantité total collecté papier","quantite_total_collecte_papier"],
  ["Quantité total collecté canette","quantite_total_collecte_canette"],
 ];
export default function ZoneTravailTable() {
  const initialValue = { region: "",quantite_total_collecte_plastique: "" ,quantite_total_collecte_composte: "",quantite_total_collecte_papier: "",quantite_total_collecte_canette: "", created_at: "", updated_at: "", error_list:[]};
  const url = `http://127.0.0.1:8000/api/zone-travail`
  const columnDefs = [
      { headerName: "ID", field: "id", maxWidth:100, minWidth:50, pinned: 'left'  },
      { headerName: "region", field: "region",  minWidth:120, },
      { headerName: "Quantité plastique", field: "quantite_total_collecte_plastique", maxWidth: 200, minWidth:160,cellStyle: {textAlign:"center",color: 'rgb(18, 102, 241)', 'fontSize':"18px"}},
      { headerName: "Quantité composte", field: "quantite_total_collecte_composte", maxWidth: 200, minWidth:180,cellStyle: {textAlign:"center",color:  'rgb(0, 183, 74)', 'fontSize':"18px"}},
      { headerName: "Quantité papier", field: "quantite_total_collecte_papier", maxWidth: 200, minWidth:160,cellStyle: {textAlign:"center",color:'rgb(255, 173, 13)', 'fontSize':"18px"}},
      { headerName: "Quantité canette", field: "quantite_total_collecte_canette", maxWidth: 200, minWidth:160,cellStyle: {textAlign:"center",color:'rgb(249, 49, 84)', 'fontSize':"18px"}},
  ]

  return (
    <div style={{width:"100%"}}>
        <h2 align="center" style={{color:"green", fontSize:"30px"}}>Zone de travail</h2>
        <Api tableName='Zone de travail' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/>  
    </div>
  );
}


