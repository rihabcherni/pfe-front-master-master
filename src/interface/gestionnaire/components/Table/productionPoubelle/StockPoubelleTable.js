import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
    ["ID","id"],
    ["Image produit","photo"],
    ["Type poubelle","type_poubelle"],
    ["Quantité disponible","quantite_disponible"],
    ["Description technique","description"],
    ["Crée le","created_at"],
    ["Modifié le","updated_at"],
  ]; 
  
  const createUpdate=[
    ["ID","id"],
    ["Image produit","photo"],
    ["Type poubelle","type_poubelle"],
    ["Quantité disponible","quantite_disponible"],
    ["Description technique","description"]
  ]; 
export default function StockPoubelleTable() {
  const initialValue = {photo:"",type_poubelle: "",quantite_disponible: "", description: "",error_list:[]};    
  const url = `${process.env.REACT_APP_API_KEY}/api/stock-poubelle`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Image produit", field: "photo" , maxWidth:200, minWidth:140, cellRenderer: (params) =>
    <img  style={{height:"57px", width:"77px"}} 
      src={`${process.env.REACT_APP_API_KEY}/storage/images/stock_poubelle/${params.data.photo}`}alt="poubelle stock" />},
    { headerName: "Type poubelle", field: "type_poubelle"  , maxWidth:200, minWidth:150},
    { headerName: "Quantité disponible", field: "quantite_disponible" , maxWidth:200, minWidth:170 },
    { headerName: "Description technique", field: "description" , maxWidth:800, minWidth:400 },
  ]
  const columnDefsTrash = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Image produit", field: "photo" , maxWidth:200, minWidth:140, cellRenderer: (params) =>
    <img  style={{height:"57px", width:"77px"}} 
      src={`${process.env.REACT_APP_API_KEY}/storage/images/stock_poubelle/${params.data.photo}`}alt="poubelle stock" />},
    { headerName: "Type poubelle", field: "type_poubelle"  , maxWidth:200, minWidth:150},
    { headerName: "Quantité disponible", field: "quantite_disponible" , maxWidth:200, minWidth:170 },
    { headerName: "Description technique", field: "description" , maxWidth:800, minWidth:400 },
  ]
  return (
    <div style={{width:"100%"}}>
      <Api tableNameSing='stock poubelle' tableNamePlu='stock poubelles' 
      url={url} initialValue={initialValue} columnDefs={columnDefs} columnDefsTrash={columnDefsTrash}
      show={show} createUpdate={createUpdate}/>   
    </div> 
  );
}
