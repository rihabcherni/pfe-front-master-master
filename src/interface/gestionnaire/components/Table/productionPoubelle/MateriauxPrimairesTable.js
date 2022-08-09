import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
            ["ID","id"],
            ["Fournisseur","fournisseur_id"],
            ["Nom materiel","nom_materiel"],   
            ["Prix unitaire (DT)","prix_unitaire"],   
            ["Quantité","quantite"],   
            ["Prix totale (DT)","prix_total"],
            ["Crée le","created_at"],
            ["Modifié le","updated_at"],
           ]; 
  const createUpdate=[
            ["ID","id"],
            ["Fournisseur","fournisseur_id"],
            ["Nom materiel","nom_materiel"],   
            ["Prix unitaire (DT)","prix_unitaire"],   
            ["Quantité","quantite"],   
            ["Prix totale (DT)","prix_total"],
           ];    
export default function MateriauxPrimairesTable() {
  const initialValue = { id_fournisseur: "", nom_materiel: "",prix_unitaire: "", quantite: "",prix_total:"",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/materiaux-primaires`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    {headerName: 'Détails materiaux',  children: [  { headerName: "Nom materiel", field: "nom_materiel", maxWidth:200, minWidth:135},
    { headerName: "Prix unitaire (DT)", field: "prix_unitaire", maxWidth:200, minWidth:154},
    { headerName: "Quantité", field: "quantite", maxWidth:200, minWidth:107},
    { headerName: "Prix totale (DT)", field: "prix_total", maxWidth:200, minWidth:150}]},
    {headerName: 'Détails Fournisseur',  children: [ 
      { headerName: "id", field: "fournisseur_id", maxWidth: 70 , minWidth:70},
      { headerName: "nom et prénom", field: "fournisseur_nom", maxWidth: 220 , minWidth:140},
      { headerName: "CIN", field: "cin", maxWidth: 220 , minWidth:120},]},
  ]
  
  return (
    <div style={{width:"100%"}}>
      <h2 align="center" style={{color:"green", fontSize:"30px"}}>  Materiaux Primaires</h2>
      <Api  tableName='Stock poubelle' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/>  
    </div>
  );
}