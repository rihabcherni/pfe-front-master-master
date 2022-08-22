import React from 'react';
import '../../../App.css'
import Api from '../../../Global/ComponentTableShow/Api';
const show=[
  ["ID","id"],
  ["Id poubelle","poubelle_id"],
  ["Nom poubelle","nom_poubelle"],
  ["Type","type"],
  ["Etat de remplissage","etat"],  ["type_poubelle","type_poubelle"],
  ["Quantité","quantite"],
  ["Date dépot","date_depot"],
  ["Crée le","created_at"],
  ["Modifié le","updated_at"],
 ];
export default function HistoriqueViderPoubelleResponsable() {
  const initialValue = { poubelle_id:"", nom_poubelle:"",type_poubelle:"",etat:"", quantite:"", date_depot:"",created_at:"", updated_at:"",error_list:[]};
  const url = `http://127.0.0.1:8000/api/historique-vider-poubelle-gestionnaire`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Id poubelle", field: "poubelle_id", maxWidth:120, minWidth:120},
    { headerName: "Nom poubelle", field: "nom_poubelle", maxWidth:200, minWidth:180},
    { headerName: "Type", field: "type_poubelle", maxWidth:100, minWidth:100 },
    { headerName: "Etat de remplissage", field: "etat", maxWidth:180, minWidth:170},
    { headerName: "Quantité", field: "quantite", maxWidth:110, minWidth:110},
    { headerName: "Date dépot", field: "date_depot", maxWidth:200, minWidth:160},
  ]
  return (
    <div style={{width:"100%"}}>
        <h2 align="center" style={{color:"green", fontSize:"30px"}}>Historique vider poubelles dans les établissement</h2>
        <Api tableName='Historique vider poubelle' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}/>  
    </div>
  );
}