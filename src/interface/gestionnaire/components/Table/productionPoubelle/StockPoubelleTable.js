import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
    ["ID","id"],
    ["Image produit","photo"],
    ["Type poubelle","type_poubelle"],
    ["Quantité disponible","quantite_disponible"],
    ["Prix unitaire (DT)","prix_unitaire"],
    ["Remise (%)","pourcentage_remise"],
    ["Crée le","created_at"],
    ["Modifié le","updated_at"],
  ]; 
  
  const createUpdate=[
    ["ID","id"],
    ["Image produit","photo"],
    ["Type poubelle","type_poubelle"],
    ["Quantité disponible","quantite_disponible"],
    ["Prix unitaire (DT)","prix_unitaire"],
    ["Remise (%)","pourcentage_remise"],
  ]; 
export default function StockPoubelleTable() {
  const initialValue = {photo:"",type_poubelle: "",quantite_disponible: "",prix_unitaire:"", pourcentage_remise: "",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/stock-poubelle`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Image produit", field: "photo" , maxWidth:200, minWidth:140, cellRenderer: (params) =>
    <img  style={{height:"57px", width:"77px"}} 
      src={`http://127.0.0.1:8000/storage/images/stock_poubelle/${params.data.photo}`}alt="poubelle stock" />},
    { headerName: "Type poubelle", field: "type_poubelle"  , maxWidth:200, minWidth:150},
    { headerName: "Quantité disponible", field: "quantite_disponible" , maxWidth:200, minWidth:170 },
    { headerName: "Prix unitaire (DT)", field: "prix_unitaire" , maxWidth:200, minWidth:160 },
    { headerName: "Remise (%)", field: "pourcentage_remise" , maxWidth:200, minWidth:140 },
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center" style={{color:"green", fontSize:"30px"}}> Stock Poubelle</h2>
      <Api tableName='Stock poubelle' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/>   
    </div>
  );
}
