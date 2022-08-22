import React, { useState, useCallback , useRef, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { AgGridReact } from 'ag-grid-react';
import Button  from '@mui/material/Button'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import RestoreIcon from '@mui/icons-material/Restore';
export const Item = styled(Paper)(({ theme }) => 
  (
    {
      backgroundColor: theme.palette.mode === 'dark' ? '#f0f0f0' : '#f0f0f0',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
  )
);
export const defaultColDef ={resizable: true,sortable: true, flex: 1, filter: true}
export const rowHeight = 60;
export const columnTypes =  {    
 numberColumn: { width: 50, filter: 'agNumberColumnFilter' },
 medalColumn: { width: 50, columnGroupShow: 'open', filter: false },
 nonEditableColumn: { editable: false },
 dateColumn: {
   filter: 'agDateColumnFilter',
   filterParams: {
     comparator: (filterLocalDateAtMidnight, cellValue) => {
       const dateParts = cellValue.split('/');
       const day = Number(dateParts[0]);
       const month = Number(dateParts[1]) - 1;
       const year = Number(dateParts[2]);
       const cellDate = new Date(year, month, day);
       if (cellDate < filterLocalDateAtMidnight) {
         return -1;
       } else if (cellDate > filterLocalDateAtMidnight) {
         return 1;
       } else {
         return 0;
       }
     },
   },
 },
}
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton aria-label="close" onClick={onClose} sx={{position: 'absolute',right: 8,top: 8,color: (theme) => theme.palette.grey[500]}}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
BootstrapDialogTitle.propTypes = { children: PropTypes.node, onClose: PropTypes.func.isRequired,};
export default function DialogTrash({tableNamePlu,handleClickOpenTrash,handleClose,columnDefs, url}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
    const gridRef = useRef();
    const [gridApi, setGridApi] = useState(null)
    const onGridReady = (params) => {
      setGridApi(params)
    }
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const onQuickFilterChanged = useCallback(() => {
      gridRef.current.api.setQuickFilter(
        document.getElementById('quickFilterTrash').value
      );
    }, []);
    const onBtnExportAllPdfTrashed = useCallback(() => {
      fetch(url+'-all-pdf-trashed', {type: "GET"}).then((res) => res.json());
    }, []);
    
    const onBtnRestoreAllTrashed = useCallback(() => {
      fetch(url+'-restore-all', {type: "GET"}).then((res) => res.json());
    }, []);
    const onBtnForverTrashedAll = useCallback(() => {
      fetch(url+'-suppression-definitif-all', {type: "GET"}).then((res) => res.json());
    }, []); 
    
    const onPaginationChange=(pageSize)=>{gridApi.api.paginationSetPageSize(Number(pageSize)) }
    var requestOptionsetab = { method: 'GET',redirect: 'follow'};
    const [data, setData] = useState([])
    useEffect(() => {
        ;(async function getStatus() {
          const response = await fetch(`${url}-liste-suppression`,requestOptionsetab)
          const json = await response.json()
          setData(json.data)            
          setTimeout(getStatus, 100000)
        })()
    
      }, [])
      console.log(data)  
      console.log(`${url}s/liste-suppression`)  
      return (
    <div>
      <BootstrapDialog onClose={handleClose} aria-labelledby="alert-dialog-title" maxWidth='md'
        open={handleClickOpenTrash} aria-describedby="alert-dialog-description" fullWidth> 
        <BootstrapDialogTitle id="alert-dialog-title" onClose={handleClose} sx={{fontWeight: "700",fontSize:"28px",height:"60px", backgroundColor: 'white', textAlign:"center", color:"green"}}>
          Liste des {tableNamePlu} supprimés :
        </BootstrapDialogTitle>
        <DialogContent sx={{backgroundColor: 'white'}}>
          <div style={{backgroundColor:"#4bae4f", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <Grid  container direction="row" justifyContent="space-between" alignItems="flex-start" >
              <Item  style={{margin:"10px 20px ",backgroundColor:'#DCDCDC'}}>
                <ManageSearchIcon variant="contained" color="success"  style={{marginBottom:"-5px"}} />
                <input type="text"  onInput={onQuickFilterChanged}  id="quickFilterTrash"  placeholder="recherche..."  style={{backgroundColor:'#DCDCDC', border:'none',padding:"8px" }}/>
              </Item>
              <Item  style={{margin:"5px 20px ",backgroundColor:'#DCDCDC'}}>
                <select style={{marginRight:'5px' , padding:"10px" , borderRadius:"5px",border:"none"}}  onChange={(e)=>onPaginationChange(e.target.value)}>
                  <option value='5'>5</option>
                  <option value='25'>25</option>
                  <option value='50'>50</option>
                  <option value='100'>100</option>
                </select>
                <Button variant="contained" color="warning" sx={{ marginLeft:"5px" }} onClick={onBtnExportAllPdfTrashed}><FileDownloadIcon/></Button>
                <Button variant="contained" color="success" sx={{ marginLeft:"5px" }} onClick={onBtnRestoreAllTrashed}><RestoreIcon/></Button>
                <Button variant="contained" color="error" sx={{ marginLeft:"5px" }} onClick={onBtnForverTrashedAll}><DeleteForeverIcon/></Button>
              </Item>
            </Grid>
            <div className="ag-theme-material" style={{ height: '415px',width:"100%"}}>
              <AgGridReact ref={gridRef} debounceVerticalScrollbar='true' rowData={data} columnDefs={columnDefs}  defaultColDef={defaultColDef}
                onGridReady={onGridReady} columnTypes={columnTypes} rowHeight={rowHeight} pagination={true} paginationPageSize={5}/>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}   











{/* {url}<br/>
             {url+`/suppression-definitif/{id} `}  <br/>
             {url+`/annuler-suppression-total `} <br/>
         */}