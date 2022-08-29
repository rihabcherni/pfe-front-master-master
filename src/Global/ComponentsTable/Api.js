import React, { useState, useEffect, useCallback } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../../App.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Table} from './Table'
import {ButtonTable} from '../../style'
import DialogAddUpdate from './DialogAddUpdate';
import DialogShow from './DialogShow';
import Swal from 'sweetalert';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DialogTrash from './DialogTrash';
export default function Api({tableNameSing, tableNamePlu,initialValue, url, columnDefs,columnDefsTrash, show, createUpdate}) {
  const [tableData, setTableData] = useState(null)
  const [open, setOpen] =useState(false);
  const [openShow, setOpenShow] =useState(false);
  const [openTrash, setOpenTrash] =useState(false);
  const [formData, setFormData] = useState(initialValue)
  const [picture, setPicture] = useState("s")
  const [validation, setValidation] = useState([])
  const onBtnExportPdf = useCallback((oldData) => {
    fetch(url+'-pdf'+`/${oldData.id}`, {type: "GET"}).then((res) => res.json());
    handleClose()
  }, []);

  const onBtnExportPdfTrash = useCallback((oldData) => {
    console.log(url+'-pdf-trashed'+`/${oldData.id}`)
    fetch(url+'-pdf-trashed'+`/${oldData.id}`, {type: "GET"}).then((res) => res.json());
    handleClose()
  }, []);
  const onBtnExportPdfTrashAll = useCallback((oldData) => {
    console.log(url+'-all-pdf-trashed'+`/${oldData.id}`)
    fetch(url+'-all-pdf-trashed'+`/${oldData.id}`, {type: "GET"}).then((res) => res.json());
    handleClose()
  }, []);
  
  const handleRestoreTrashedId = useCallback((oldData) => {
    console.log(url+'-restore'+`/${oldData.id}`)
    fetch(url+'-restore'+`/${oldData.id}`, {type: "GET"}).then((res) => res.json());
    handleClose()
  }, []);
  const handleDeleteTrashedForeverId = useCallback((oldData) => {
    console.log(url+'-suppression-definitif'+`/${oldData.id}`)
    fetch(url+'-suppression-definitif'+`/${oldData.id}`, {type: "GET"}).then((res) => res.json());
    handleClose()
  }, []);
  const handleClickOpen = () => {setOpen(true);};
  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue)
    setValidation([])
    };
  const handleClickOpenShow = () => {
    setOpenShow(true);
  };
  const handleCloseShow = () => {setOpenShow(false);};
  const handleClickOpenTrash = () => {setOpenTrash(true);};
  const handleCloseTrash = () => {setOpenTrash(false);};
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
  var requestOptions = {method: 'GET', headers: myHeaders, redirect: 'follow'};
  var requestOptionsDelete = {method: 'DELETE', headers: myHeaders, redirect: 'follow'};
  useEffect(() => {getData()}, [])
  const getData = () => {
    if(localStorage.getItem('auth_token')){
      fetch(url, requestOptions).then(resp => resp.json()).then(resp => {setTableData(resp.data);}).catch(err => {
        console.log("Error Reading data " + err);
      });
    }else{
      fetch(url).then(resp => resp.json()).then(resp => {setTableData(resp.data);}).catch(err => {
        console.log("Error Reading data " + err);
      });
    }
  }
  const onChange = (e) => {
      const { value, id } = e.target
      setFormData({ ...formData, [id]: value })
  }
  const handleUpdate = (oldData) => {
    setFormData(oldData)
    handleClickOpen()
  } 
  const handleShow = (oldData) => {
    setFormData(oldData)
    handleClickOpenShow()
  }
  const handleDelete = (oldData) => {
    const confirm = window.confirm("Êtes-vous sûr de vouloir supprimer cette ligne", oldData.id)
    if (confirm) {
      if(localStorage.getItem('auth_token')){
        fetch(url+ `/${oldData.id}`, requestOptionsDelete).then(resp => resp.json()).then(resp => getData())
        Swal("Suppression", "ligne supprimer avec succés" ,"success")
      }
    else{
      fetch(url+ `/${oldData.id}`,{method: "DELETE"}).then(resp => resp.json()).then(resp => getData())
      Swal("Suppression", "ligne supprimer avec succés" ,"success")
    }
    }
  }
  const handleFormSubmit= (e) =>  {
    if (formData.id) {
      const confirm = window.confirm("Êtes-vous sûr de vouloir mettre à jour cette ligne?")
      if(localStorage.getItem('auth_token')){
      confirm && fetch(url + `/${formData.id}`, {
        method: "PUT", body: JSON.stringify(formData), headers: {
          'content-type': "application/json","Authorization":`Bearer ${localStorage.getItem('auth_token')}`
        }
      }).then(resp => resp.json())
      .then(resp => {
            if(resp.validation_error){
              setValidation(resp.validation_error)
            }else{
              handleClose()
              getData()      
            }
          }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
          console.log(validation)  } else{ confirm && fetch(url + `/${formData.id}`, {
            method: "PUT", body: JSON.stringify(formData), headers: {
              'content-type': "application/json"
            }
          }).then(resp => resp.json())
          .then(resp => {
                if(resp.validation_error){
                  setValidation(resp.validation_error)
                }else{
                  handleClose()
                  getData()      
                }
              }).catch(err => {
                // Do something for an error here
                console.log("Error Reading data " + err);
              });
              console.log(validation)  }


      } else {
        // adding new user
        if(localStorage.getItem('auth_token')){
        fetch(url, {
          method: "POST", body: JSON.stringify(formData), headers: {
            'content-type': "application/json", 'Accept': 'application/json',"Authorization":`Bearer ${localStorage.getItem('auth_token')}`
          }}).then(resp =>resp.json() )
          .then(resp => {
            if(resp.validation_error){
              setValidation(resp.validation_error)
            }else{
               handleClose()
               getData()      
            }
          }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
          console.log(validation)    }
          else{
            fetch(url, {
              method: "POST", body: JSON.stringify(formData), headers: {
                'content-type': "application/json",
                'Accept': 'application/json',
              }}).then(resp => resp.json())
            .then(resp => {
              if(resp.validation_error){
                setValidation(resp.validation_error)
              }else{
                 handleClose()
                 getData()      
              }
            }).catch(err => {
              // Do something for an error here
              console.log("Error Reading data " + err);
            });
            console.log(validation) 
          }
      }
    }
    let tableColumn;
    let tableColumnTrash;
    if(columnDefs[0].field==='id'){
        tableColumn=  columnDefs.concat(
          { headerName: "Crée le", field: "created_at", type: ['dateColumn', 'nonEditableColumn'], maxWidth: 200, minWidth:180 },
          { headerName: "modifié le", field: "updated_at", type: ['dateColumn', 'nonEditableColumn'], maxWidth: 200, minWidth:180  },
          { headerName: "Actions",sortable:false,filter:false,maxWidth: 160,minWidth: 150,pinned: 'right', cellRenderer: (params) => <div>
              <ButtonTable variant="outlined" className='tableIcon' color="warning" onClick={() => handleShow(params.data)} style={{marginRight:"2px"}}><VisibilityIcon/></ButtonTable>
              <ButtonTable variant="outlined" className='tableIcon' color="primary" onClick={() => handleUpdate(params.data)} style={{marginRight:"2px"}}><EditIcon/></ButtonTable>
              <ButtonTable variant="outlined" className='tableIcon' color="error" onClick={() => handleDelete(params.data)}><DeleteIcon/></ButtonTable>
              <ButtonTable variant="outlined" className='tableIcon' sx={{ marginLeft:"3px" }} color="error" onClick={() => onBtnExportPdf(params.data)}><PictureAsPdfIcon/></ButtonTable>       
            </div>
          })

        tableColumnTrash= columnDefsTrash.concat(
            { headerName: "Crée le", field: "created_at", type: ['dateColumn', 'nonEditableColumn'], maxWidth: 200, minWidth:180 },
            { headerName: "modifié le", field: "updated_at", type: ['dateColumn', 'nonEditableColumn'], maxWidth: 200, minWidth:180  },
            { headerName: "supprimé le", field: "deleted_at", type: ['dateColumn', 'nonEditableColumn'], maxWidth: 200, minWidth:180  },
            { headerName: "Actions",sortable:false,filter:false,maxWidth: 160,minWidth: 150,pinned: 'right', cellRenderer: (params) => <div>
                    <ButtonTable variant="outlined" className='tableIcon' color="warning" onClick={() => handleShow(params.data)} style={{marginRight:"2px"}}><VisibilityIcon/></ButtonTable>
                    <ButtonTable variant="outlined" className='tableIcon' sx={{ marginLeft:"3px" }} color="error" onClick={() => onBtnExportPdfTrash(params.data)}><PictureAsPdfIcon/></ButtonTable>       
                    <ButtonTable variant="outlined" className='tableIcon' sx={{ marginLeft:"3px" }}  color="success" onClick={() => handleRestoreTrashedId(params.data)}><RestoreFromTrashIcon/></ButtonTable>
                    <ButtonTable variant="outlined" className='tableIcon' sx={{ marginLeft:"3px" }}  color="error" onClick={() => handleDeleteTrashedForeverId(params.data)}><DeleteForeverIcon/></ButtonTable>
                    
                  </div>
            })
  return (
    <div style={{width:"100%"}}>
        <Table tableNameSing={tableNameSing} tableNamePlu={tableNamePlu} handleClickOpen={handleClickOpen} handleClickOpenTrash={handleClickOpenTrash} columnDefs={tableColumn} tableData={tableData} url={url}/>
        <DialogAddUpdate open={open} handleClose={handleClose} createUpdate={createUpdate}
          data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit}  validation={validation}  tableName={tableNameSing}/>
       
        <DialogShow open={openShow} handleClose={handleCloseShow}  show={show}
          data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} tableName={tableNameSing}/>

        <DialogTrash tableNamePlu={tableNamePlu} handleClickOpenTrash={openTrash} handleClose={handleCloseTrash} columnDefs={tableColumnTrash} url={url}/>

    </div>
  );
  }  
}

