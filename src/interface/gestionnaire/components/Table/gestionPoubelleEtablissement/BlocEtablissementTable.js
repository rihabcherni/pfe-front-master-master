import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["ID","id"],
            ["Etablissement","etablissement_id"],
            ["Bloc etablissement","nom_bloc_etablissement"],
            ["Crée le","created_at"],
            ["Modifié le","updated_at"],
           ];  
  const createUpdate=[
            ["ID","id"],
            ["Etablissement","etablissement_id"],
            ["Bloc etablissement","nom_bloc_etablissement"],
           ];   
export default function BlocEtablissementTable() {
  const initialValue = {etablissement_id:"", nom_bloc_etablissement: "",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/bloc-etablissement`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Bloc etablissement", field: "nom_bloc_etablissement", cellStyle:{backgroundColor:"#f4f0ec", fontSize:"14px"} },
    { headerName: "Etablissement", field: "etablissement", cellStyle:{fontSize:"14px"} },
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center" style={{color:"green", fontSize:"30px"}}> Bloc Etablissement</h2>
      <Api tableName='Bloc établissement'  url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/>
    </div>
  );
}