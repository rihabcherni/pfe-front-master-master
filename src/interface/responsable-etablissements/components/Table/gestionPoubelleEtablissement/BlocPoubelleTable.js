import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["ID","id"],
            ["etage_etablissement_id","etage_etablissement_id"],
  ]; 
  
  const createUpdate=[
    ["ID","id"],
    ["etage_etablissement_id","etage_etablissement_id"],
];
export default function BlocPoubelleTable() {
  const initialValue = {id:"", etage_etablissement_id: "",error_list:[]};    
  const url = `${process.env.REACT_APP_API_KEY}/api/auth-responsable-etablissement/bloc-poubelle-responsable`
  const columnDefs = [
    { headerName: "Numero bloc poubelle", field: "id", maxWidth:200, minWidth:50, pinned: 'left' },
    { headerName: "bloc etablissement", field: "nom_bloc", },
    { headerName: "etage etablissement", field: "nom_etage", },
  ]
  return (
    <div style={{width:"100%"}}>
      <Api tableNameSing='bloc poubelle' tableNamePlu='blocs poubelles' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate} />  
    </div>
  );
}   