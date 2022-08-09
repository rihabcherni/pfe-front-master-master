import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
 const show=[
  ["ID","id"],
  ["Etablissement","etablissement"],
  ["Nom","nom"],
  ["Prénom","prenom"],
  ["Numéro télèphone","numero_telephone"],
  ["Numéro fixe","numero_fixe"],
  ["E-mail","email"],
  ["Mot de passe", "mot_de_passe"],
  ["Adresse","adresse"],
  ["Crée le","created_at"],
  ["Modifié le","updated_at"],
 ];

 const createUpdate=[
  ["ID","id"],
  ["Etablissement","etablissement"],
  ["Nom","nom"],
  ["Prénom","prenom"],
  ["Numéro télèphone","numero_telephone"],
  ["Numéro fixe","numero_fixe"],
  ["E-mail","email"],
  ["Mot de passe", "mot_de_passe"],
  ["Adresse","adresse"],
 ];
export default function ResponsableTable() {
  const initialValue = { etablissement:"",photo:"",nom: "", prenom: "", numero_telephone: "",numero_fixe:"",mot_de_passe:"", email: "", mot_de_passe:"",adresse:"",created_at:"", updated_at:"", error_list:[]};
  const url = `http://127.0.0.1:8000/api/responsable-etablissement`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "etablissement", field: "etablissement", maxWidth: 200 , minWidth:120},
    { headerName: "Photo", field: "photo", maxWidth:100, minWidth:100, cellRenderer: (params) =>
      <img  style={{height:"50px",marginLeft:"5px", width:"50px", borderRadius:"50%"}} 
          src={`http://127.0.0.1:8000/storage/images/responsable_etablissement/${params.data.photo}`} alt="responsable" />},
    { headerName: "Nom", field: "nom", maxWidth: 200 , minWidth:120},
    { headerName: "Prénom", field: "prenom", maxWidth: 200 , minWidth:120},
    { headerName: "Numéro télèphone", field: "numero_telephone", maxWidth: 200 , minWidth:160},
    { headerName: "Numéro fixe", field: "numero_fixe" , maxWidth: 180 , minWidth:160},
    { headerName: "E-mail", field: "email", maxWidth: 300 , minWidth:210},
    { headerName: "Adresse", field: "adresse" , maxWidth: 500 , minWidth:300},
  ]
  return (
    <div style={{width:"100%"}}>
        <h2 align="center" style={{color:"green", fontSize:"30px"}}>Responsables des établissements</h2>
        <Api  tableName='commande déchets' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/> 
    </div>
  );
}


