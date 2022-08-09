import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

 const createUpdate=[
  ["ID","id"],
  ["Nom entreprise","nom_entreprise"],
  ["Nom","nom"],
  ["Prénom","prenom"],
  ["Matricule fiscale","matricule_fiscale"],
  ["Numéro télèphone","numero_telephone"],
  ["Numéro fixe","numero_fixe"],
  ["E-mail","email"],
  ["Mot de passe","mot_de_passe"],
  ["Adresse","adresse"],
 ];

 const show=[
  ["ID","id"],
  ["Nom entreprise","nom_entreprise"],
  ["Nom","nom"],
  ["Prénom","prenom"],
  ["Matricule fiscale","matricule_fiscale"],
  ["Numéro télèphone","numero_telephone"],
  ["Numéro fixe","numero_fixe"],
  ["E-mail","email"],
  ["Mot de passe","mot_de_passe"],
  ["Adresse","adresse"],
  ["Crée le","created_at"],
  ["Modifié le","updated_at"],
 ];
export default function ClientTable() {
  const initialValue = { nom_entreprise:"", nom: "", prenom: "",matricule_fiscale:"", numero_telephone: "",numero_fixe:"", 
  email: "", mot_de_passe:"", adresse:"",created_at:"", updated_at:"", error_list:[]};
  const url = `http://127.0.0.1:8000/api/client`
  const columnDefs = [
    { headerName: "ID", field: "id",  maxWidth:100,minWidth:80, pinned: 'left' },
    { headerName: "Nom entreprise", field: "nom_entreprise", minWidth: 150 , maxWidth: 180},
    { headerName: "Nom", field: "nom", minWidth: 120 , maxWidth: 180 },
    { headerName: "Prénom ", field: "prenom", minWidth: 120 , maxWidth: 180 },
    { headerName: "Matricule fiscale", field: "matricule_fiscale", minWidth: 170 , maxWidth: 200 },
    { headerName: "Numéro télèphone", field: "numero_telephone" , minWidth: 150 , maxWidth: 200 },
    { headerName: "Numéro fixe", field: "numero_fixe", minWidth: 130 , maxWidth: 220 },
    { headerName: "E-mail", field: "email", minWidth: 200 , maxWidth: 220  },
    { headerName: "Adresse", field: "adresse", minWidth: 250 , maxWidth: 400 },
  ]
  return (
    <div style={{width:"100%"}}>
        <h2 align="center" style={{color:"green", fontSize:"30px"}}>Client de déchets</h2>
        <Api tableName='client dechet' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/>  
    </div>
  );
}


