import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
    ["ID","id"],["Nom","nom"],
    ["Prénom","prenom"],["CIN","CIN"],
    ["Numéro télèphone","numero_telephone"],
    ["E-mail","email"],["Adresse","adresse"],
    ["Mot de passe", "mot_de_passe"],
    ["Crée le","created_at"],
    ["Modifié le","updated_at"],
  ];    
  const createUpdate=[
    ["ID","id"],["Nom","nom"],
    ["Prénom","prenom"],["CIN","CIN"],
    ["Numéro télèphone","numero_telephone"],
    ["E-mail","email"],["Adresse","adresse"],
    ["Mot de passe", "mot_de_passe"],
  ];
export default function ReparateurPoubelleTable() {
  const initialValue = {photo:"",nom:"", prenom:"",CIN:"", numero_telephone:"", email:"",adresse:"",mot_de_passe:"",created_at:"", updated_at:"",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/reparateur-poubelle`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "photo", field: "photo" , maxWidth: 140 , minWidth:100, cellRenderer: (params) =>
    <img  style={{height:"47px", width:"47px", borderRadius:"50%"}} 
          src={`http://127.0.0.1:8000/storage/images/reparateur_poubelle/${params.data.photo}`}alt="mecanicien" />},
    { headerName: "Nom", field: "nom" , maxWidth: 180 , minWidth:160},
    { headerName: "Prénom", field: "prenom" , maxWidth: 180 , minWidth:160},
    { headerName: "CIN", field: "CIN" , maxWidth: 180 , minWidth:160},
    { headerName: "Numéro télèphone", field: "numero_telephone" , maxWidth: 180 , minWidth:160 },
    { headerName: "E-mail", field: "email" , maxWidth: 300 , minWidth:200 },
    { headerName: "Adresse", field: "adresse" , maxWidth: 400 , minWidth:200},
  ]
    return (
        <div style={{width:"100%"}}>
              <Api tableNameSing='Réparateur des poubelles' tableNamePlu='Réparateurs des poubelles' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/>  
        </div>
    );
  }
      




















