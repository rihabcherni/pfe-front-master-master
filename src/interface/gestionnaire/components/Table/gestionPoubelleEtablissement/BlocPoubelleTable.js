import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
     ["ID","id"],
     ["etage_etablissement_id","etage_etablissement_id"],
     ["Crée le","created_at"],
     ["Modifié le","updated_at"],
  ];    

  const createUpdate=[
    ["ID","id"],
    ["etage_etablissement_id","etage_etablissement_id"],
 ]; 
export default function BlocPoubelleTable() {
  const initialValue = {id:"", etage_etablissement_id: "",error_list:[]};    
  const url = `${process.env.REACT_APP_API_KEY}/api/bloc-poubelle`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Etablissement", field: "etablissement", },
    { headerName: "Bloc établissement", field: "bloc_etabl", },
    { headerName: "Etage etablissement", field: "etage", },
  ]
  return (
    <div style={{width:"100%"}}>
      <Api tableNameSing='Bloc poubelle' tableNamePlu='Blocs poubelles'  
        url={url} initialValue={initialValue} columnDefs={columnDefs} columnDefsTrash={columnDefs} 
        show={show}  createUpdate={createUpdate}/>  
    </div>
  );
} 