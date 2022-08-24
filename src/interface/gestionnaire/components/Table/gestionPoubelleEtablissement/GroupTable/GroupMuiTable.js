import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import {tableIcons ,localization} from './style'
import styled from 'styled-components'
import '../../../../css/GroupTable.css'
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
			<ProgressDone style={style}>
         {done}%
			</ProgressDone>
		</ProgressStyle>
	)
}
const ProgressStyle = styled.div`
	background-color: #d8d8d8;
	position: relative;
	margin: 15px 0;
	height: 30px;
	width: 100%;
`
const ProgressDone = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
  padding-left:10px ;
	height: 100%;
	width: 0;
	opacity: 0;
	transition: 1s ease 0.3s;
  `


export default function GroupMuiTable() {
    const [tableZone, setTableZone] =  useState([]);
    const url = `${process.env.REACT_APP_API_KEY}/api/region-map`
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        fetch(url).then(resp => resp.json()).then(resp => {setTableZone(resp);  })
    }
    if(tableZone!==null){
        return (
            <div className='Group-table'>
                <MaterialTable icons={tableIcons}  title={<p className='title-group-table'>Détails  par zone travail</p> }  localization={localization} data={tableZone}
                    columns={[
                        { title: 'Region', field: 'region' ,type:'string'},
                        { title: 'Total plastique', field: 'quantite_total_collecte_plastique' , cellStyle: {
                            textAlign:"center",color: 'blue',width:"300px"},},
                        { title: 'Total papier', field: 'quantite_total_collecte_papier', cellStyle: {
                            textAlign:"center",color: 'orange',width:"300px"},},
                        { title: 'Total composte', field: 'quantite_total_collecte_composte' , cellStyle: {
                            textAlign:"center",color: 'green',width:"300px"},},
                        { title: 'Total canette', field: 'quantite_total_collecte_canette', cellStyle: {
                            textAlign:"center",color: 'red',width:"300px"},},  
                        { title: 'Crée le', field: 'created_at' , type: 'datetime'  , cellStyle: {
                            textAlign:"center",width:"300px"},},
                        { title: 'Modifié le', field: 'updated_at' , type: 'datetime'  , cellStyle: {
                            textAlign:"center",width:"300px"},},
                    ]}
                    detailPanel={rowData => {
                        return (
                            <div style={{margin:'10px',maxWidth:"1350px"}}>
                                <MaterialTable icons={tableIcons} title={<p className='title-group-table'>Détails  par établissement</p> }  localization={localization} data={rowData.etablissements}
                                    columns={[
                                        { title: 'Etablissement', field: 'nom_etablissement', type: 'string'  },
                                        { title: 'Type', field: 'type_etablissement', type: 'string'  },
                                        { title: 'Niveau', field: 'niveau_etablissement', type: 'string'  },
                                        { title: 'Nombres personnes', field: 'nbr_personnes'}, 
                                        { title: 'Quantite plastique', field: 'quantite_dechets_plastique', cellStyle: {
                                            textAlign:"center",color: 'blue',width:"400px"},},
                                        { title: 'Quantite composte', field: 'quantite_dechets_composte', cellStyle: {
                                            textAlign:"center",color: 'green',width:"400px"},}, 
                                        { title: 'Quantite papier', field: 'quantite_dechets_papier' , cellStyle: {
                                            textAlign:"center",color: 'orange',width:"400px"},}, 
                                        { title: 'Quantite canette', field: 'quantite_dechets_canette', cellStyle: {
                                            textAlign:"center",color: 'red',width:"400px"},},  
                                        { title: 'Crée le', field: 'created_at' , type: 'datetime'  },  
                                        { title: 'Modifié le', field: 'updated_at' , type: 'datetime'  }, 
                                    ]}
                                    detailPanel={rowData => {
                                        return (
                                            <div style={{margin:'10px',maxWidth:"1350px"}}>
                                                <MaterialTable icons={tableIcons}  title={<p className='title-group-table'>Détails  par Bloc etablissements</p> }  localization={localization}  data={rowData.bloc_etablissements}
                                                    columns={[
                                                        { title: 'Bloc etablissement', field: 'nom_bloc_etablissement' },                                                           
                                                        { title: 'Crée le', field: 'created_at' , type: 'datetime'  }, 
                                                        { title: 'Modifié le', field: 'updated_at' , type: 'datetime'  }, 
                                                    ]}
                                                    detailPanel={rowData => {
                                                        return (
                                                            <div style={{margin:'10px',maxWidth:"1350px"}}>
                                                                <MaterialTable   icons={tableIcons} title={<p className='title-group-table'>Détails  par etage établissement</p> } localization={localization} data={rowData.etage_etablissements}
                                                                    columns={[
                                                                       { title: 'Etage', field: 'nom_etage_etablissement' },                                                           
                                                                       { title: 'Crée le', field: 'created_at' , type: 'datetime'  }, 
                                                                       { title: 'Modifié le', field: 'updated_at' , type: 'datetime'  },  
                                                                    ]}
                                                                    detailPanel={rowData => {
                                                                        return (
                                                                            <div style={{margin:'10px',maxWidth:"1350px"}}>
                                                                                <MaterialTable  icons={tableIcons} title={<p className='title-group-table'>Détails  par bloc poubelles</p> } localization={localization}  data={rowData.bloc_poubelles}
                                                                                    columns={[
                                                                                        { title: 'Bloc Poubelle ', field: 'id'},
                                                                                        { title: 'Crée le', field: 'created_at' , type: 'datetime'  }, 
                                                                                        { title: 'Modifié le', field: 'updated_at' , type: 'datetime'  }, 
                                                                                    ]}
                                                                                    detailPanel={rowData => {
                                                                                        return (
                                                                                            <div style={{margin:'10px',maxWidth:"1350px"}}>
                                                                                                <MaterialTable icons={tableIcons} title={<p className='title-group-table'>Détails  par poubelles</p> }    localization={localization}  data={rowData.poubelles}
                                                                                                    columns={[
                                                                                                        { title: 'Poubelle', field: 'nom' },
                                                                                                        { title: 'Type', field: 'type' },                                                           
                                                                                                        { title: 'Etat', field: 'Etat' ,render: rowData =>   <Progress done={`${rowData.Etat}`} />,  
                                                                                                        cellStyle: {  width:"200px"}},                                                           
                                                                                                        { title: 'Crée le', field: 'created_at' , type: 'datetime'  }, 
                                                                                                        { title: 'Modifié le', field: 'updated_at' , type: 'datetime'  }, 
                                                                                                    ]}
                                                                                                    options={{
                                                                                                        exportButton: true,
                                                                                                        headerStyle: { backgroundColor: 'green', textAlign:"center",fontSize:"14px",color: '#FFF'},
                                                                                                        cellStyle:{fontSize:'13px', textAlign:"center"}
                                                                                                      }} 
                                                                                                     onRowClick={(event, rowData, togglePanel) => togglePanel()}/>
                                                                                            </div>
                                                                                        )
                                                                                    }}
                                                                                    options={{
                                                                                        exportButton: true,
                                                                                        headerStyle: { backgroundColor: 'green', textAlign:"center",fontSize:"14px",color: '#FFF'},
                                                                                        cellStyle:{fontSize:'13px', textAlign:"center"}
                                                                                      }} 
                                                                                    onRowClick={(event, rowData, togglePanel) => togglePanel()}  />
                                                                            </div>
                                                                        )
                                                                    }}
                                                                    options={{
                                                                        exportButton: true,
                                                                        headerStyle: { backgroundColor: 'green', textAlign:"center",fontSize:"14px",color: '#FFF'},
                                                                        cellStyle:{fontSize:'13px', textAlign:"center"}
                                                                      }} 
                                                                    onRowClick={(event, rowData, togglePanel) => togglePanel()}  />
                                                            </div>
                                                        )
                                                    }}
                                                    options={{
                                                        exportButton: true,
                                                        headerStyle: { backgroundColor: 'green', textAlign:"center",fontSize:"14px",color: '#FFF'},
                                                        cellStyle:{fontSize:'13px', textAlign:"center"}
                                                      }} 
                                                    onRowClick={(event, rowData, togglePanel) => togglePanel()} />
                                            </div>
                                        )
                                    }}
                                    options={{
                                        exportButton: true,
                                        headerStyle: { backgroundColor: 'green', textAlign:"center",fontSize:"14px",color: '#FFF'},
                                        cellStyle:{fontSize:'13px', textAlign:"center"}
                                      }}  
                                    onRowClick={(event, rowData, togglePanel) => togglePanel()} />
                            </div>
                        )
                    }}
                    options={{
                        exportButton: true,
                        headerStyle: { backgroundColor: 'green', textAlign:"center",fontSize:"14px",color: '#FFF'},
                        cellStyle:{fontSize:'13px', textAlign:"center"}
                      }}                
                    onRowClick={(event, rowData, togglePanel) => togglePanel()} />
            </div>
        )
    }else {
        return "vide"
    }
  }
  
