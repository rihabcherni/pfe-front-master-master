import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
const show=[
    ["ID","id"],
  //   ["Photo","photo"],
    ["Nom","nom"],
    ["Prénom","prenom"],
    ["Carte d'identité nationnale","CIN"],
    ["Numéro télèphone","numero_telephone"],
    ["E-mail","email"],
    ["Crée le","created_at"],
    ["Modifié le","updated_at"],
   ];
   const createUpdate=[
    ["ID","id"],
    ["Nom","nom"],
    ["Prénom","prenom"],
    ["Carte d'identité nationnale","CIN"],
    ["Numéro télèphone","numero_telephone"],
    ["E-mail","email"],
    ["Crée le","created_at"],
    ["Modifié le","updated_at"],
   ];
export default function ResponsableCommercialTable() {
    const initialValue = {photo:"",nom: "", prenom: "",CIN:"", numero_telephone: "", email: "",created_at:"", updated_at:"", error_list:[]};
    const url = `http://127.0.0.1:8000/api/responsable-commercial`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Photo", field: "photo", maxWidth:100, minWidth:100, cellRenderer: (params) =>
      <img  style={{height:"50px",marginLeft:"5px", width:"50px", borderRadius:"50%"}} 
          src={`http://127.0.0.1:8000/storage/images/responsable_commercial/${params.data.photo}`} alt="responsable commercial" />},
    { headerName: "Nom", field: "nom", maxWidth: 200 , minWidth:120},
    { headerName: "Prénom", field: "prenom", maxWidth: 200 , minWidth:120},
    { headerName: "CIN", field: "CIN", maxWidth: 200 , minWidth:120},
    { headerName: "Numéro télèphone", field: "numero_telephone", maxWidth: 200 , minWidth:160},
    { headerName: "E-mail", field: "email", maxWidth: 300 , minWidth:210},
  ]
  return (
    <div style={{width:"100%"}}>
        <Api tableNameSing='Responsable commercial' tableNamePlu='Responsables commercial' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/> 
    </div>
  );
}


