import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[
        ["ID","id"],
        ["N° commande","commande_dechet_id"],
        ["Déchet","dechet_id"],
        ["Quantité","quantite"],
        ["Crée le","created_at"],
        ["Modifié le","updated_at"],
       ]; 
       
  const createUpdate=[
        ["ID","id"],
        ["N° commande","commande_dechet_id"],
        ["Déchet","dechet_id"],
        ["Quantité","quantite"],
       ];   
export default function DetailCommandeDechetTable() {
    const initialValue = { commande_dechet_id:"", dechet_id:"", quantite:"",created_at:"", updated_at:"",error_list:[]};    
    const url = `http://127.0.0.1:8000/api/detail-commande-dechets` 
    const columnDefs = [
      { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left' },
      { headerName: "N° commande ", field: "commande_dechet_id", maxWidth: 200 , minWidth:150},
      { headerName: "Type déchet",  field: "type", maxWidth: 200 , minWidth:150},
      { headerName: "Prix unitaire (DT)", field: "dechet.prix_unitaire", maxWidth: 200 , minWidth:160},
      { headerName: "Remise (%)", field: "dechet.pourcentage_remise", maxWidth: 200 , minWidth:140},
      { headerName: "Quantité (KG)", field: "quantite", maxWidth: 200 , minWidth:140}, 
    ]  
    return (
        <div style={{width:"100%"}}>
              <h2 align="center" style={{color:"green", fontSize:"30px"}}>Détails commandes déchets</h2>
              <Api tableName='Détails commande déchets' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/> 
        </div>
    );
  }
      