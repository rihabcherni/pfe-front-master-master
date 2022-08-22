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
            ["Adresse","adresse"]
           ];
export default function FournisseurTable() {
  const initialValue = { nom: "", prenom: "",CIN: "", photo: "",numero_telephone:"",email:"",adresse:"",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/fournisseurs`
  const columnDefs = [
        { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
        { headerName: "photo", field: "photo", maxWidth:150, minWidth:90, cellRenderer: (params) =>
        <img  style={{height:"47px", width:"47px", borderRadius:"50%"}} 
              src={`http://127.0.0.1:8000/storage/images/fournisseur/${params.data.photo}`} alt="fournisseur"/>},
        { headerName: "Nom", field: "nom" , maxWidth:200, minWidth:100},
        { headerName: "Prénom", field: "prenom", maxWidth:200, minWidth:100},
        { headerName: "CIN", field: "CIN", maxWidth:150, minWidth:130},
        { headerName: "Numéro télèphone", field: "numero_telephone", maxWidth:180, minWidth:160 },
        { headerName: "E-mail", field: "email" , maxWidth:200, minWidth:150},
        { headerName: "Adresse", field: "adresse" , maxWidth:400, minWidth:180}
      ] 
        return (
          <div style={{width:"100%"}}>
            <Api tableNameSing='fournisseur' tableNamePlu='fournisseurs' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/>   
          </div>
        );
      }