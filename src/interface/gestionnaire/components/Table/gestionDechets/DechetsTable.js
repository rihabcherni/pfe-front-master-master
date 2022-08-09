import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

 const show=[
  ["ID","id"],
  ["Type dechet","type_dechet"],
  ["Prix unitaire (Kg)","prix_unitaire"],
  ["Crée le","created_at"],
  ["Modifié le","updated_at"],
 ];

 const createUpdate=[
  ["ID","id"],
  ["Type dechet","type_dechet"],
  ["Prix unitaire (Kg)","prix_unitaire"],
 ];
 export default function DechetsTable() {
  const initialValue = { type_dechet:"", prix_unitaire:"",error_list:[]};

  const url = `http://127.0.0.1:8000/api/dechets`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Photo", field: "photo", maxWidth:200, minWidth:150, cellRenderer: (params) =>
    <img  style={{height:"60px",marginLeft:"5px", width:"65px"}} 
        src={`http://127.0.0.1:8000/storage/images/dechet/${params.data.photo}`} alt="dechet image" />},
    { headerName: "Type dechet", field: "type_dechet"},
    { headerName: "Prix unitaire (Kg)", field: "prix_unitaire"},
  ]
  return (
    <div style={{width:"100%"}}>
        <h2 align="center" style={{color:"green", fontSize:"30px"}}>Dechet</h2>
        <Api tableName='Détails commande dechet' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}  createUpdate={createUpdate}/> 
    </div>
  );
}











