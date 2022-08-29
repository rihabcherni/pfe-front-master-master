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
        ["Adresse","adresse"],
        ["Mot de passe", "mot_de_passe"],
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
        ["Adresse","adresse"],
        ["Mot de passe", "mot_de_passe"],
       ]; 
export default function MecanicienTable() {
  const initialValue = { photo:"",nom:"", prenom:"",CIN:"", numero_telephone:"", email:"",adresse:"",mot_de_passe:"",created_at:"", updated_at:"",error_list:[]};    
    const url = `${process.env.REACT_APP_API_KEY}/api/mecanicien` 
    const columnDefs = [
      { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
      { headerName: "photo", field: "photo" , maxWidth: 140 , minWidth:100, cellRenderer: (params) =>
      <img  style={{height:"47px", width:"47px", borderRadius:"50%"}} 
            src={`${process.env.REACT_APP_API_KEY}/storage/images/mecanicien/${params.data.photo}`}alt="mecanicien" />},
      { headerName: "Nom", field: "nom" , maxWidth: 180 , minWidth:160},
      { headerName: "Prénom", field: "prenom" , maxWidth: 180 , minWidth:160},
      { headerName: "CIN", field: "CIN" , maxWidth: 180 , minWidth:160},
      { headerName: "Numéro télèphone", field: "numero_telephone" , maxWidth: 180 , minWidth:160 },
      { headerName: "E-mail", field: "email" , maxWidth: 300 , minWidth:200 },
      { headerName: "Adresse", field: "adresse" , maxWidth: 400 , minWidth:200},
    ]
    const columnDefsTrash = [
      { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
      { headerName: "photo", field: "photo" , maxWidth: 140 , minWidth:100, cellRenderer: (params) =>
      <img  style={{height:"47px", width:"47px", borderRadius:"50%"}} 
            src={`${process.env.REACT_APP_API_KEY}/storage/trashImages/mecanicien/${params.data.photo}`}alt="mecanicien" />},
      { headerName: "Nom", field: "nom" , maxWidth: 180 , minWidth:160},
      { headerName: "Prénom", field: "prenom" , maxWidth: 180 , minWidth:160},
      { headerName: "CIN", field: "CIN" , maxWidth: 180 , minWidth:160},
      { headerName: "Numéro télèphone", field: "numero_telephone" , maxWidth: 180 , minWidth:160 },
      { headerName: "E-mail", field: "email" , maxWidth: 300 , minWidth:200 },
      { headerName: "Adresse", field: "adresse" , maxWidth: 400 , minWidth:200},
    ]
    return (
        <div style={{width:"100%"}}>
              <Api tableNameSing='Mécanicien camions'  tableNamePlu='Mécaniciens camions' url={url} 
              initialValue={initialValue} columnDefs={columnDefs} columnDefsTrash={columnDefsTrash}
              show={show} createUpdate={createUpdate}/>  
        </div>
    );
  }
      




