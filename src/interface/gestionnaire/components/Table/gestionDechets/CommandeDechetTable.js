import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';

 const show=[
  ["ID","id"],
  ["Client dechet","client_dechet_id"],
  ["Type paiment","type_paiment"],
  ["Montant total","montant_total"],
  ["Date commande","date_commande"],
  ["Date livraison","date_livraison"],
  ["Crée le","created_at"],
  ["Modifié le","updated_at"],
 ];

 const createUpdate=[
  ["ID","id"],
  ["Client dechet","client_dechet_id"],
  ["Type paiment","type_paiment"],
  ["Montant total","montant_total"],
  ["Date commande","date_commande"],
  ["Date livraison","date_livraison"]
 ];

 export default function CommandeDechetTable() {
  const initialValue = { client_dechet_id:"", type_paiment:"", montant_total:"", date_commande:"", date_livraison:"",created_at:"", updated_at:"", error_list:[]};

  const url = `http://127.0.0.1:8000/api/commande-dechet`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
    { headerName: "Entreprise", field: "entreprise" , maxWidth: 250 , minWidth:200},
    { headerName: "Matricule fiscale client", field: "matricule_fiscale" , maxWidth: 250 , minWidth:200},
    { headerName: "Type paiment", field: "type_paiment", maxWidth: 200 , minWidth:140},
    { headerName: "Montant total (DT)", field: "montant_total", maxWidth: 200 , minWidth:180},
    { headerName: "Date de commande", field: "date_commande", maxWidth: 200 , minWidth:180},
    { headerName: "Date de livraison", field: "date_livraison", maxWidth: 200 , minWidth:180}
  ]

  return (
    <div style={{width:"100%"}}>
        <h2 align="center" style={{color:"green", fontSize:"30px"}}>Commandes de déchets</h2>
        <Api tableName='commande dechet' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show}  createUpdate={createUpdate}/>  
    </div>
  );
}











