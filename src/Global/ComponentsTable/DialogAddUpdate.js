import React , {useState , useEffect} from 'react';
import { Stepper, Step } from "react-form-stepper";
import { MdDescription , MdPhoto} from "react-icons/md";
import StepWizard from "react-step-wizard";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, FormHelperText, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import BlocEtab from './PoubelleSelect/BlocEtab'
import EtageEtab from './PoubelleSelect/EtageEtab';
import BlocPoubelle from './PoubelleSelect/BlocPoubelle';
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

export default function DialogAddUpdate({tableName,open,handleClose,data,onChange,handleFormSubmit,  validation, createUpdate}) {
 const {id}=data ;
 let rows = [];
 var requestOptionsetab = { method: 'GET',redirect: 'follow'};
 const [etab, setEtab] = useState([])
  useEffect(() => {
    ;(async function getStatus() {
      const response = await fetch(`${process.env.REACT_APP_API_KEY}/api/EtablissementListe`,requestOptionsetab)
      const json = await response.json()
      setEtab(json)            
      setTimeout(getStatus, 1000)
    })()

  }, [])
  for (let i = 0; i < createUpdate.length; i++) {
    if(createUpdate[i][1]==="photo" ){
      rows.push(
        <>
          <input type="file" accept="image/*"  name="photo" id="photo" onChange={e=>onChange(e)}/> 
          <FormHelperText error={true}> {validation[createUpdate[i][0]]}</FormHelperText> 
        </>
      );
    }
    if(createUpdate[i][1]==="type" || createUpdate[i][1]==="type_poubelle"){
      rows.push(
       <> 
         <div className="dropdown">
            <select  className='dropdown-result' value={data.type} name="type" id="type" onChange={(e) => onChange(e)}  >
                <option value="" disabled selected className='dropdown-placeholder'>Type poubelle</option>
                <option value="plastique" className='dropdown-items'>plastique</option>
                <option value="papier" className='dropdown-items'>papier</option>
                <option value="canette" className='dropdown-items'>canette</option>
                <option value="composte" className='dropdown-items'>composte</option>
              </select>
            </div>
       </>
      );
    }
    if(createUpdate[i][1]==="etablissement_id" ){   
      rows.push(
        <div className="dropdown">
          <select className='dropdown-result' value={data.etablissement_id} name="etablissement_id" id="etablissement_id" onChange={(e) => onChange(e)}  >
            <option value="" disabled selected className='dropdown-placeholder'>Etablissement</option>
            {etab.length!==0 ? etab.map((eta , i)=><option key={i}  value={eta} className='dropdown-items'>{eta}</option>):<option value={"null"}>null</option>}    
          </select>
        </div>
      );
      if(createUpdate[i+1][1]==="bloc_etablissement_id" && data.etablissement_id !== undefined ){
        rows.push(  <BlocEtab etablissement_id={data.etablissement_id} data={data} onChange={onChange}/>);
      }else if(createUpdate[i+1][1]==='bloc_etablissement_id' && data.etablissement_id === undefined){
        rows.push(      
        <FormControl sx={{ width:"100%" , marginBottom:"8px" }} disabled>
          <InputLabel >Bloc établissement</InputLabel>
          <Select label="Bloc établissement">
            <MenuItem value=""><em>None</em></MenuItem>
          </Select>
        </FormControl>
       )
      }

      if(createUpdate[i+2][1]==="etage_etablissement_id" && data.etablissement_id !== undefined && data.bloc_etablissement_id !== undefined){
        rows.push(  <EtageEtab etablissement_id={data.etablissement_id} bloc_etablissement_id={data.bloc_etablissement_id}  data={data} onChange={onChange}/>);
      }else if(createUpdate[i+2][1]==='etage_etablissement_id'  && data.bloc_etablissement_id === undefined){
        rows.push(      
        <FormControl sx={{ width:"100%" , marginBottom:"8px" }} disabled>
          <InputLabel >Etage établissement</InputLabel>
          <Select label="Etage établissement">
            <MenuItem value=""><em>None</em></MenuItem>
          </Select>
        </FormControl>
       )
      }
      if(createUpdate[i+3][1]==="bloc_poubelle_id" && data.etablissement_id !== undefined && data.bloc_etablissement_id !== undefined && data.etage_etablissement_id !== undefined){
        rows.push( <BlocPoubelle etablissement_id={data.etablissement_id} bloc_etablissement_id={data.bloc_etablissement_id} etage_etablissement_id={data.etage_etablissement_id}   data={data} onChange={onChange}/>);
      }else if(createUpdate[i+3][1]==='bloc_poubelle_id' && data.etage_etablissement_id === undefined){
        rows.push(      
        <FormControl sx={{ width:"100%", marginBottom:"8px" }} disabled>
          <InputLabel >Bloc poubelle</InputLabel>
          <Select label="Bloc poubelle">
            <MenuItem value=""><em>None</em></MenuItem>
          </Select>
        </FormControl>
       )
      }
    }
    if(id){
      if( (createUpdate[i][1]=="quantite_total_collecte_plastique")||(createUpdate[i][1]=="quantite_total_collecte_composte")|| (createUpdate[i][1]=="quantite_total_collecte_papier")||(createUpdate[i][1]=="quantite_total_collecte_canette")){
        rows.push(
          <>
            <TextField id={createUpdate[i][1]} value={data[createUpdate[i][1]]} onChange={e=>onChange(e)} placeholder={createUpdate[i][0]}  
              error={!!validation[createUpdate[i][1]]} label={createUpdate[i][0]} variant="outlined" margin="dense" fullWidth />
            <FormHelperText error={true}> {validation[createUpdate[i][1]]}</FormHelperText> 
          </>
        );
      }
    }
    if(createUpdate[i][1]!=="id" 
    &&  createUpdate[i][1]!=="etablissement_id" 
    && createUpdate[i][1]!=="bloc_etablissement_id" 
    && createUpdate[i][1]!=="etage_etablissement_id" 
    && createUpdate[i][1]!=="bloc_poubelle_id" 
    && createUpdate[i][1]!=="type" 
    && createUpdate[i][1]!=="type_poubelle" 
    && createUpdate[i][1]!=="quantite_total_collecte_plastique" 
    && createUpdate[i][1]!=="quantite_total_collecte_composte" 
    && createUpdate[i][1]!=="quantite_total_collecte_papier" 
    && createUpdate[i][1]!=="quantite_total_collecte_canette" 
    && createUpdate[i][1]!=="photo"){
      rows.push(
        <>
          <TextField id={createUpdate[i][1]} value={data[createUpdate[i][1]]}  onChange={e=>onChange(e)} placeholder={createUpdate[i][0]} error={!!validation[createUpdate[i][1]]} label={createUpdate[i][0]} variant="outlined" margin="dense" fullWidth />
          <FormHelperText error={true}>
            {validation[createUpdate[i][1]]}        
          </FormHelperText>  
        </>
      );
    }
  }
  return (
    <div>
      <BootstrapDialog onClose={handleClose} aria-labelledby="alert-dialog-title" open={open} aria-describedby="alert-dialog-description" fullWidth>
        <BootstrapDialogTitle id="alert-dialog-title" onClose={handleClose} sx={{fontWeight: "400",fontSize:"30px", backgroundColor: 'white', textAlign:"center", color:"green"}}>
          {id?"modifier des données ":"créer un nouveau "} {tableName}
        </BootstrapDialogTitle>

        <DialogContent sx={{backgroundColor: 'white', margin:"0 20px" }}>
          <form encType="multipart/form-data"   style={{columnWidth: "200px"}}>     
              {rows}            
          </form>   
    
        </DialogContent>
        <DialogActions sx={{backgroundColor: 'white'}}>
          <Button sx={{color:"white",width:"150px", margin:"0px 50px 15px"}} color="success" onClick={()=>handleFormSubmit()} variant="contained">
            {id?"modifier":"envoyer"}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}