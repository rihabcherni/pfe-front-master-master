import React, { useState,useEffect } from 'react';
import MaterialTable from 'material-table';
import {tableIcons ,localization} from './style'
import styled from 'styled-components'

const Progress = ({done}) => {
	const [style, setStyle] =useState({});
	const [color, setColor] =useState("");
	const [colorNumber, setColorNumber] =useState("");
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
    const [data, setData] = useState(null)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    const getData = () => {
      fetch(`${process.env.REACT_APP_API_KEY}/api/auth-responsable-etablissement/bloc-etablissement-resp`, requestOptions)
        .then(response => response.json())
        .then(result => setData(result.bloc_etablissement))
        .catch(error => console.log('error', error));  
    }
    useEffect(() => {
        getData()
    }, [])
    if(data!==null){
        return (
            <div className='Group-table'>
                <div style={{margin:'10px',maxWidth:"1350px"}}>

                <MaterialTable icons={tableIcons}  title="Details Bloc etablissements" localization={localization}
                    columns={[
                        { title: 'Id', field: 'id' },
                        { title: 'Bloc établissement', field: 'nom_bloc_etablissement' },                                                           
                        { title: "Date d'ajout", field: 'created_at', type: 'datetime', dateSetting: { format: 'M/d/yy' } },  
                        { title: 'Date de modification', field: 'updated_at', type: 'datetime'  },   
                    ]}
                    data={data}
                    detailPanel={rowData => {
                        return (
                            <div style={{margin:'10px 3%',maxWidth:"1350px"}}>
                            <MaterialTable   icons={tableIcons}  title="Details etage établissement" localization={localization} data={rowData.etage_etablissements}
                                columns={[
                                   { title: 'Id', field: 'id' },
                                   { title: 'Etage établissement', field: 'nom_etage_etablissement' },                                                           
                                   { title: "Date d'ajout", field: 'created_at', type: 'datetime'  },  
                                   { title: 'Date de modification', field: 'updated_at', type: 'datetime'  },  
                                ]}
                                detailPanel={rowData => {
                                    return (
                                        <div style={{margin:'10px 3%',maxWidth:"1350px"}}>
                                          <MaterialTable  icons={tableIcons}  title="Details bloc poubelles"  localization={localization}  data={rowData.bloc_poubelles}
                                                columns={[
                                                    { title: 'Id', field: 'id' },
                                                    { title: "Date d'ajout", field: 'created_at', type: 'datetime'  },   
                                                    { title: 'Date de modification', field: 'updated_at', type: 'datetime'  },   
                                                ]}
                                                detailPanel={rowData => {
                                                    return (
                                                        <div style={{margin:'10px 3%',maxWidth:"1350px"}}>
                                                            <MaterialTable icons={tableIcons}  title="Details poubelles" localization={localization}  data={rowData.poubelles}
                                                                columns={[
                                                                    { title: 'Id', field: 'id' },
                                                                    { title: 'Poubelle', field: 'nom' },                                                           
                                                                    { title: 'Etat', field: 'Etat' ,render: rowData =>   <Progress done={`${rowData.Etat}`} />,  
                                                                    cellStyle: {
                                                                       width:"200px"
                                                                      }},                                                           
                                                                    { title: "Date d'ajout", field: 'created_at', type: 'datetime'  },   
                                                                    { title: 'Date de modification', field: 'updated_at', type: 'datetime'  },  
                                                                ]}
                                                                 onRowClick={(event, rowData, togglePanel) => togglePanel()}
                                                                 options={{
                                                                    headerStyle: {
                                                                        backgroundColor: '#9D9D9D',
                                                                        color: '#FFF', 
                                                                        fontSize:"14px",
                                                                        textAlign:"center"
                                                                      },
                                                                      cellStyle: {
                                                                          textAlign:"center"
                                              
                                                                      },
                                                                  }}/>
                                                        </div>
                                                    )
                                                }}
                                                onRowClick={(event, rowData, togglePanel) => togglePanel()} 
                                                options={{
                                                    headerStyle: {
                                                        backgroundColor: '#9D9D9D',
                                                        color: '#FFF', 
                                                        fontSize:"14px",
                                                        textAlign:"center"
                                                      },
                                                      cellStyle: {
                                                          textAlign:"center"
                              
                                                      },
                                                  }}/>
                                        </div>
                                    )
                                }}
                                onRowClick={(event, rowData, togglePanel) => togglePanel()}  
                                options={{
                                    headerStyle: {
                                        backgroundColor: '#9D9D9D',
                                        color: '#FFF', 
                                        fontSize:"14px",
                                        textAlign:"center"
                                      },
                                      cellStyle: {
                                          textAlign:"center"
              
                                      },
                                  }}/>
                        </div>
                        )
                    }}
                    onRowClick={(event, rowData, togglePanel) => togglePanel()}
                    options={{
                        headerStyle: {
                          backgroundColor: '#9D9D9D',
                          color: '#FFF', 
                          fontSize:"14px",
                          textAlign:"center"
                        },
                        cellStyle: {
                            textAlign:"center"

                        },
                      }}
              />   
                </div>                            
            </div>
        )
    }else {
        return "vide"
    }
  }
  
