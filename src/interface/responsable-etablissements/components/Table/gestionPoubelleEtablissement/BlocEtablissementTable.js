import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["ID","id"],
             ["Etablissement","etablissement_id"],
            ["Bloc etablissement","nom_bloc_etablissement"],
           ];    

  const createUpdate=[
            ["ID","id"],
            // ["Etablissement","etablissement_id"],
            ["Bloc etablissement","nom_bloc_etablissement"],
           ]; 
export default function BlocEtablissementTable() {
  const initialValue = {etablissement_id:"", nom_bloc_etablissement: "",error_list:[]};    
  const url = `${process.env.REACT_APP_API_KEY}/api/auth-responsable-etablissement/bloc-etablissement-responsable`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "bloc etablissement", field: "nom_bloc_etablissement", },
  ]
  return (
    <div style={{width:"100%"}}>
      <Api tableNameSing='bloc établissement'  tableNamePlu='blocs établissements' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/>  
    </div>
  );
}