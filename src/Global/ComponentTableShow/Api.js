import React, { useState, useEffect } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../../App.css'
import { Table} from './Table'
import {ButtonTable} from '../../style'
import DialogShow from './DialogShow';

export default function Api({tableName,initialValue, url, columnDefs, show}) {
  const [tableData, setTableData] = useState(null)
  const [openShow, setOpenShow] = useState(false);
  const [formData, setFormData] = useState(initialValue)  
 
  const handleClickOpenShow = () => {
    setOpenShow(true);
  };
  const handleCloseShow = () => {
    setOpenShow(false);
  };
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
  var requestOptions = { method: 'GET', headers: myHeaders, redirect: 'follow'}; 
  const getData = () => {
    if(localStorage.getItem('auth_token')){
      fetch(url, requestOptions).then(resp => resp.json()).then(resp => {setTableData(resp.data);}).catch(err => {
        console.log("Error Reading data " + err);
      });
    }else{
      fetch(url).then(resp => resp.json()).then(resp => {setTableData(resp.data); console.log(resp)}).catch(err => {
        console.log("Error Reading data " + err);
      });
    }
  
  }
  useEffect(() => {getData()}, [])
 
  const onChange = (e) => {
    const { value, id } = e.target
    setFormData({ ...formData, [id]: value })
  }
  const handleShow = (oldData) => {
    setFormData(oldData)
    handleClickOpenShow()
  }
    let tableColumn;
    if(columnDefs[0].field==='id'){
        tableColumn=  columnDefs.concat(
          { headerName: "Crée le", field: "created_at", type: ['dateColumn', 'nonEditableColumn'], maxWidth: 200, minWidth:180 },
          { headerName: "modifié le", field: "updated_at", type: ['dateColumn', 'nonEditableColumn'], maxWidth: 200, minWidth:180  },
          { headerName: "Actions",sortable:false,filter:false,maxWidth: 130,minWidth: 120,pinned: 'right', cellRenderer: (params) => <div>
                  <ButtonTable variant="outlined" className='tableIcon' color="warning" onClick={() => handleShow(params.data)} style={{marginRight:"2px"}}><VisibilityIcon/></ButtonTable>
                </div>
          })
  return (
    <div style={{width:"100%"}}>
        <Table columnDefs={tableColumn} tableData={tableData}/>
        <DialogShow open={openShow} handleClose={handleCloseShow}  show={show}
          data={formData} onChange={onChange} tableName={tableName}/>
    </div>
  );
}  
}

