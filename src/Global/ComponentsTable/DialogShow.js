import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

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
export default function DialogZoneTravailShow({tableName,open,handleClose,data, show}) {

  let rows = [];
  for (let i = 0; i < show.length; i++) {
    if(show[i][0]==="photo"){
      rows.push(
        <img style={{height:"200px", width:"200px", borderRadius:"50%"}} 
        src={`${process.env.REACT_APP_API_KEY}/storage/images/ouvrier/${data[show[i][0]]}`} alt="gestionnaire"/>
      );
    }
  }
  return (
    <div>
      <BootstrapDialog onClose={handleClose} aria-labelledby="alert-dialog-title" maxWidth='md'
        open={open} aria-describedby="alert-dialog-description" fullWidth> 
        <BootstrapDialogTitle id="alert-dialog-title" onClose={handleClose} sx={{fontWeight: "700",fontSize:"30px", backgroundColor: 'white', textAlign:"center", color:"green"}}>
          Affichage des données {tableName}
        </BootstrapDialogTitle>
        <DialogContent sx={{backgroundColor: 'white'}}>
          <div>{rows}</div> 
          <ul style={{columnWidth: "350px"}}>
            {show.length!==0?(show.map((sh, key) =>   
              (( sh[1]!=="photo" && sh[1]!=="qrcode"  && sh[1]!=="mot_de_passe")?(
                <li key={key} style={{fontSize:"17px"}}>
                  <b style={{color:"green"}}>{sh[0]}: </b>
                  {data[sh[1]]}
                </li>
                ): null)
            )):null
            }
          </ul>     
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}