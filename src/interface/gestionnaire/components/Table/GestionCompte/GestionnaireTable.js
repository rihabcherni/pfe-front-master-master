import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

 const show=[
  ["ID","id"],
  ["Nom","nom"],
  ["Prénom","prenom"],
  ["CIN","CIN"],
  ["Numéro télèphone","numero_telephone"],
  ["E-mail","email"],
  ["Mot de passe","mot_de_passe"],
  ["Adresse","adresse"],
  ["Crée le","created_at"],
  ["Modifié le","updated_at"],
 ];

 const createUpdate=[
  ["ID","id"],
  ["Nom","nom"],
  ["Prénom","prenom"],
  ["CIN","CIN"],
  ["Numéro télèphone","numero_telephone"],
  ["E-mail","email"],
  ["Mot de passe","mot_de_passe"],
  ["Adresse","adresse"],
 ];

export default function GestionnaireTable() {
  const initialValue = { photo:"",nom: "", prenom: "",CIN:"", numero_telephone: "", email: "", adresse:"",created_at:"", updated_at:"", error_list:[]};
  const url = `http://127.0.0.1:8000/api/gestionnaire`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:50, minWidth:50, pinned: 'left' },
    { headerName: "Photo", field: "photo", minWidth:100, minWidth:100, cellRenderer: (params) =>
    <img  style={{height:"47px", width:"47px", borderRadius:"50%"}} 
          src={`http://127.0.0.1:8000/storage/images/gestionnaire/${params.data.photo}`} alt="gestionnaire"/>},
    { headerName: "Nom", field: "nom", maxWidth: 160, minWidth:120 },
    { headerName: "Prénom", field: "prenom", maxWidth: 160, minWidth:120},
    { headerName: "CIN", field: "CIN", maxWidth: 120, minWidth:100 },
    { headerName: "Numéro télèphone", field: "numero_telephone", maxWidth: 200, minWidth:160},
    { headerName: "E-mail", field: "email", maxWidth: 120, minWidth:100 },
    { headerName: "Adresse", field: "adresse" , maxWidth: 250 , minWidth:50},
  ]

  return (
    <>
        <Api tableNamePlu='Gestionnaires' tableNameSing='Gestionnaire' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/> 
    </>
  );
}



