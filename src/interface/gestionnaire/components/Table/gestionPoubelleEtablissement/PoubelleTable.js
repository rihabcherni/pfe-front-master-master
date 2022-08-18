import React , {useState} from 'react'
import '../../../../../App.css'
import Api from '../../../../../Global/ComponentsTable/Api';
import styled from 'styled-components'

const ProgressStyle = styled.div` background-color: #d8d8d8;
	position: relative; margin: 15px 0; height: 30px; width: 100%;`
const ProgressDone = styled.div` display: flex;align-items: center; justify-content: left;
  padding-left:10px ; height: 100%; width: 0; opacity: 0; transition: 1s ease 0.3s;`
const Progress = ({done}) => {
	const [style, setStyle] = useState({});
	const [color, setColor] = useState("");
	const [colorNumber, setColorNumber] = useState("");
	setTimeout(() => {
    if(done< 25){
      setColor("green")
      setColorNumber("black")
    }else if (done>=25 && done<50){
      setColor("yellow")
      setColorNumber("black")
    }else if (done>=50 && done<75){
      setColor("orange")
      setColorNumber("white")
    }else if (done>=75 && done<100){
      setColor("red")
      setColorNumber("white")
    }
		const newStyle = {
			opacity: 1,
			width: `${done}%`,
      backgroundColor:`${color}`,
      boxShadow: `0 3px 3px -5px ${color}, 0 2px 5px ${color}`,
      color: `${colorNumber}` 
		}
		
		setStyle(newStyle);
	}, 100);	
	return (
		<ProgressStyle>
			<ProgressDone style={style}> {done}%	</ProgressDone>
		</ProgressStyle>
	)
}
const createUpdate=[ ["ID","id"],["Etablissement","etablissement_id"],["Bloc établissement","bloc_etablissement_id"],
 ["Etage","etage_etablissement_id"],["Bloc poubelle","bloc_poubelle_id"],["Type","type"],
];  

const show=[ ["ID","id"],
["Type","type"],
["nom","nom"],
["nom_poubelle_responsable","nom_poubelle_responsable"],
  ["Etablissement","etablissement"],
  ["Bloc établissement","bloc_etablissement"],
  ["Etage","etage"],
  ["N° bloc poubelle/totale","bloc_poubelle_id"],
  ["N° bloc poubelle dans l'etablissement", "bloc_poubelle_id_resp"],
  ["Etat","Etat"],
  ["quantite","quantite"],
  ["Crée le","created_at"],
  ["Modifié le","updated_at"]
 ];
export default function PoubelleTable() {
  const initialValue = { bloc_poubelle_id:"", nom:"",qrcode:"", type:"",Etat:"",created_at:"", updated_at:"",error_list:[]}
  const url = `http://127.0.0.1:8000/api/poubelle`
  const columnDefs = [
    { headerName: "ID", field: "id", maxWidth:90, minWidth:60, pinned: 'left'},
    { headerName: "Nom", field: "nom" , maxWidth:200, minWidth:170},
    { headerName: "Bloc poubelle", field: "bloc_poubelle_id" , maxWidth:150, minWidth:130},
    { headerName: "Type", field: "type", maxWidth:150, minWidth:130 },
    { headerName: "Etat de remplissage", field: "Etat", maxWidth:200, minWidth:150, cellRenderer: (params) =>
    <Progress done={`${params.data.Etat}`} />},
  ]
  return (
    <div style={{width:"100%"}}>
      <h2 align="center" style={{color:"green", fontSize:"30px"}}>Poubelle</h2>
      <Api tableName='Poubelle' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/>  
    </div>
  );
}        

 













