import React, { useState, useEffect } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../../App.css'
import { Table} from './Table'
import {ButtonTable} from '../../style'
import DialogAddUpdate from './DialogAddUpdate';
import DialogShow from './DialogShow';
import Swal from 'sweetalert';

export default function Api({tableName,initialValue, url, columnDefs, show, createUpdate}) {
  const [tableData, setTableData] = useState(null)
  const [open, setOpen] =useState(false);
  const [openShow, setOpenShow] =useState(false);
  const [formData, setFormData] = useState(initialValue)
  const [picture, setPicture] = useState(initialValue)
  const [validation, setValidation] = useState([])
  
  const handleClickOpen = () => {setOpen(true);};
  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue)
    setValidation([])
    };
  const handleClickOpenShow = () => {
    setOpenShow(true);
  };
  const handleCloseShow = () => {
    setOpenShow(false);
  };
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
   
  var requestOptionsDelete = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };
  useEffect(() => {
    getData()
  }, [])
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
    // if(formData.photo){
    //   if (e.target.files[0]) {
    //     console.log("picture: ", e.target.files);
    //     const reader = new FileReader();
    //     reader.addEventListener("load", () => {
    //       setFormData({ ...formData, photo:e.target.files[0].name })
    //     });
    //     reader.readAsDataURL();
    //   }
    // }
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
    console.log(oldData.id)
    const confirm = window.confirm("Êtes-vous sûr de vouloir supprimer cette ligne", oldData.id)
    Swal("Suppression", "ligne supprimer avec succés" ,"success")
    if (confirm) {
      if(localStorage.getItem('auth_token')){
        fetch(url+ `/${oldData.id}`, requestOptionsDelete).then(resp => resp.json()).then(resp => getData())
      }
    else{
      fetch(url+ `/${oldData.id}`,{method: "DELETE"}).then(resp => resp.json()).then(resp => getData())
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
    if(columnDefs[0].field==='id'){
        tableColumn=  columnDefs.concat(
          { headerName: "Crée le", field: "created_at", type: ['dateColumn', 'nonEditableColumn'], maxWidth: 200, minWidth:180 },
          { headerName: "modifié le", field: "updated_at", type: ['dateColumn', 'nonEditableColumn'], maxWidth: 200, minWidth:180  },
          { headerName: "Actions",sortable:false,filter:false,maxWidth: 130,minWidth: 120,pinned: 'right', cellRenderer: (params) => <div>
                  <ButtonTable variant="outlined" className='tableIcon' color="warning" onClick={() => handleShow(params.data)} style={{marginRight:"2px"}}><VisibilityIcon/></ButtonTable>
                  <ButtonTable variant="outlined" className='tableIcon' color="primary" onClick={() => handleUpdate(params.data)} style={{marginRight:"2px"}}><EditIcon/></ButtonTable>
                  <ButtonTable variant="outlined" className='tableIcon' color="error" onClick={() => handleDelete(params.data)}><DeleteIcon/></ButtonTable>
                </div>
          })
  return (
    <div style={{width:"100%"}}>
        <Table handleClickOpen={handleClickOpen} columnDefs={tableColumn} tableData={tableData}/>
        <DialogAddUpdate open={open} handleClose={handleClose} createUpdate={createUpdate}
          data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit}  validation={validation}  tableName={tableName}/>
       
        <DialogShow open={openShow} handleClose={handleCloseShow}  show={show}
          data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} tableName={tableName}/>

        
    </div>
  );
}  }

