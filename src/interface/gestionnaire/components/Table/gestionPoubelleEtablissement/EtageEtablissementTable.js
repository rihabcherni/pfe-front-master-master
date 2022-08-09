import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const createUpdate=[
            ["ID","id"],
            ["Bloc établissement","bloc_etablissement_id"],
            ["Etage établissement","nom_etage_etablissement"],
           ]; 
  const show=[
            ["ID","id"],
            ["Bloc établissement","bloc_etablissement_id"],
            ["Etage établissement","nom_etage_etablissement"],
            ["Crée le","created_at"],
            ["Modifié le","updated_at"],
           ];     
export default function EtageEtablissementTable() {
  const initialValue = {quantite_disponible_plastique: "", quantite_disponible_canette: "",quantite_disponible_composte: "", quantite_disponible_papier: "",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/etage-etablissement`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Etage établissement", field: "nom_etage_etablissement", cellStyle:{backgroundColor:"#f4f0ec", fontSize:"14px", textAlign:"center"}},
    { headerName: "établissement", field: "etablissement", cellStyle:{ fontSize:"14px", textAlign:"center"} },
    { headerName: "Bloc établissement", field: "bloc_etablissement" , cellStyle:{ fontSize:"14px", textAlign:"center"}},
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center" style={{color:"green", fontSize:"30px"}}> Etage établissement</h2>
      <Api tableName='Etage établissement' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/> 
    </div>
  );
}