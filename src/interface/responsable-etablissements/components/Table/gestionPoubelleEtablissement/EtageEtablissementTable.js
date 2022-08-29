import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["ID","id"],
            ["Bloc etablissement","bloc_etablissement_id"],
            ["Etage etablissement","nom_etage_etablissement"],
           ];   
           
  const createUpdate=[
            ["ID","id"],
            ["Bloc etablissement","bloc_etablissement_id"],
            ["Etage etablissement","nom_etage_etablissement"],
           ];
export default function EtageEtablissementTable() {
  const initialValue = {bloc_etablissement_id:"", nom_etage_etablissement: "",error_list:[]};    
  const url = `${process.env.REACT_APP_API_KEY}/api/auth-responsable-etablissement/etage-etablissement-responsable`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Bloc etablissement", field: "nom_bloc", },
    { headerName: "Etage etablissement", field: "nom_etage_etablissement", },
  ]
  return (
    <div style={{width:"100%"}}>
      <Api tableNameSing='étage établissement' tableNamePlu='étages établissements' url={url} initialValue={initialValue} columnDefs={columnDefs} columnDefsTrash={columnDefs} show={show} createUpdate={createUpdate} />  
    </div>
  );
}