import React from 'react';
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
  const show=[     
    ["ID","id"],
    ['Zone travail','zone_travail_id'],
    ['Camion','camion_id'],
    ['Etablissement','nom_etablissement'],
    ['Type','type_etablissement'],
    ['Niveau','niveau_etablissement'],
    ['Nombre personnes','nbr_personnes'],
    ['Adresse','adresse'],
    ['Longitude','longitude'],
    ['Latitude','latitude'],
    ['Quantité déchets plastique','quantite_dechets_plastique'],
    ['Quantité déchets composte','quantite_dechets_composte'],
    ['Quantité déchets papier','quantite_dechets_papier'],
    ['Quantité déchets canette','quantite_dechets_canette'],
    ['URL map','url_map'],
    ["Crée le","created_at"],
    ["Modifié le","updated_at"],
    ];  
    
    const createUpdate=[     
      ["ID","id"],
      ['Zone travail','zone_travail_id'],
      ['Camion','camion_id'],
      ['Etablissement','nom_etablissement'],
      ['Type','type_etablissement'],
      ['Niveau','niveau_etablissement'],
      ['Nombre personnes','nbr_personnes'],
      ['Adresse','adresse'],
      ['Longitude','longitude'],
      ['Latitude','latitude'],
      ['Quantité déchets plastique','quantite_dechets_plastique'],
      ['Quantité déchets composte','quantite_dechets_composte'],
      ['Quantité déchets papier','quantite_dechets_papier'],
      ['Quantité déchets canette','quantite_dechets_canette'],
      ['URL map','url_map'],
      ];  
export default function EtablissementTable() {
  const initialValue = { zone_travail_id:"",nom_etablissement:"", nbr_personnes:"",adresse:"",longitude:"",latitude:""
 ,quantite_dechets_plastique:"",quantite_dechets_composte:"",quantite_dechets_papier:"",quantite_dechets_canette:"",created_at:"", updated_at:"",error_list:[]};    
  const url = `http://127.0.0.1:8000/api/etablissement`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:80, minWidth:50, pinned: 'left'},
    { headerName: "zone travail", field: "region", maxWidth: 200, minWidth:160 },
    { headerName: "Etablissement", field: "nom_etablissement", maxWidth: 200, minWidth:160 },
    { headerName: "Nombre personnes", field: "nbr_personnes", maxWidth: 200, minWidth:180 },
    { headerName: "Adresse", field: "adresse" , maxWidth: 500, minWidth:250},
    { headerName: "Longitude", field: "longitude", maxWidth: 200, minWidth:120 },
    { headerName: "Latitude", field: "latitude", maxWidth: 200, minWidth:120},
    { headerName: "Quantité plastique", field: "quantite_dechets_plastique", maxWidth: 200, minWidth:160   ,cellStyle: {color: 'rgb(18, 102, 241)'}},
    { headerName: "Quantité composte", field: "quantite_dechets_composte" , maxWidth: 200, minWidth:180 ,cellStyle: {color:  'rgb(0, 183, 74)'}},
    { headerName: "Quantité papier", field: "quantite_dechets_papier", maxWidth: 200, minWidth:160 ,cellStyle: {color:'rgb(255, 173, 13)'}},
    { headerName: "Quantité canette", field: "quantite_dechets_canette", maxWidth: 200, minWidth:160  ,cellStyle: {color:'rgb(249, 49, 84)'}},
  ]
  return (
    <div style={{width:"100%"}}>
      <Api tableNameSing='établissement' tableNamePlu='établissements'  url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/> 
    </div>
  );
}