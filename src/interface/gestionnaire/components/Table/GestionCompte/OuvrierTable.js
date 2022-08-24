import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

 const show=[
  ["ID","id"],
  ["Camion","camion_id"],
  ["Poste","poste"],
  ["Nom","nom"],
  ["Prénom","prenom"],
  ["CIN","CIN"],
  ["Numéro télèphone","numero_telephone"],
  ["E-mail","email"],  ["adresse","adresse"],
  ["Mot de passe","mot_de_passe"],
  ["Crée le","created_at"],
  ["Modifié le","updated_at"],
 ];

 
 const createUpdate=[
  ["ID","id"],
  ["Camion","camion_id"],
  ["Poste","poste"],
  ["Nom","nom"],
  ["Prénom","prenom"],
  ["CIN","CIN"],
  ["Numéro télèphone","numero_telephone"],
  ["E-mail","email"],  ["adresse","adresse"],
  ["Mot de passe","mot_de_passe"]
 ];

export default function OuvrierTable() {
  const initialValue = { zone_travail_id:"", camion_id:"",photo:"",qrcode:"", qrcode:"", nom:"",prenom:"",CIN:"",numero_telephone:"",email:"",mot_de_passe:"",created_at:"", updated_at:"",error_list:[]};
  const url = `${process.env.REACT_APP_API_KEY}/api/ouvrier`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Camion", field: "matricule", maxWidth:120, minWidth:120},
    { headerName: "Photo", field: "photo", maxWidth:100, minWidth:100, cellRenderer: (params) =>
      <img  style={{height:"50px", width:"50px", borderRadius:"50%"}} 
          src={`${process.env.REACT_APP_API_KEY}/storage/images/ouvrier/${params.data.photo}`}  alt="ouvrier" />},
    { headerName: "Poste", field: "poste", maxWidth:100, minWidth:100},
    { headerName: "Nom", field: "nom", maxWidth:140, minWidth:120},
    { headerName: "Prénom", field: "prenom", maxWidth:140, minWidth:120},
    { headerName: "CIN", field: "CIN", maxWidth:140, minWidth:120},
    { headerName: "Numéro télèphone", field: "numero_telephone", maxWidth:220, minWidth:180 },
    { headerName: "E-mail", field: "email", maxWidth:240, minWidth:220 },
    { headerName: "Adresse", field: "adresse", maxWidth:500, minWidth:250},
  ]
  const columnDefsTrash = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Camion", field: "matricule", maxWidth:120, minWidth:120},
    { headerName: "Photo", field: "photo", maxWidth:100, minWidth:100, cellRenderer: (params) =>
      <img  style={{height:"50px", width:"50px", borderRadius:"50%"}} 
          src={`${process.env.REACT_APP_API_KEY}/storage/trashImages/ouvrier/${params.data.photo}`}  alt="ouvrier" />},
    { headerName: "Poste", field: "poste", maxWidth:100, minWidth:100},
    { headerName: "Nom", field: "nom", maxWidth:140, minWidth:120},
    { headerName: "Prénom", field: "prenom", maxWidth:140, minWidth:120},
    { headerName: "CIN", field: "CIN", maxWidth:140, minWidth:120},
    { headerName: "Numéro télèphone", field: "numero_telephone", maxWidth:220, minWidth:180 },
    { headerName: "E-mail", field: "email", maxWidth:240, minWidth:220 },
    { headerName: "Adresse", field: "adresse", maxWidth:500, minWidth:250},
  ]
  return (
    <div style={{width:"100%"}}>
        <Api  tableNameSing='ouvrier' tableNamePlu='ouvriers' url={url} initialValue={initialValue} columnDefs={columnDefs} columnDefsTrash={columnDefsTrash} show={show} createUpdate={createUpdate}/> 
    </div>
  );
}