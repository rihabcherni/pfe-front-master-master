import React, { useState } from 'react';
import { Button, FormHelperText,TextField, Typography } from '@mui/material';
import Swal from 'sweetalert';
export default function InputUpdate() {
  var profile = JSON.parse(localStorage.getItem('profile'));
  var initialValue={};
  var show1=[];
  if("auth_token" in localStorage){
    if(localStorage.getItem("Role")=== "gestionnaire"){
         initialValue = { nom: "", prenom: "",CIN:"", numero_telephone: "", email: "", adresse:"", error_list:[]};
         show1=[ ["Nom","nom"],  ["Prénom","prenom"], ["Carte d'identité nationnale","CIN"],  ["Numero de telephone","numero_telephone"], ["Email","email"], ["Adresse","adresse"],];
    }else if(localStorage.getItem("Role")=== "responsable_etablissement"){
         initialValue = { nom: "", prenom: "", numero_telephone: "",numero_fixe:"", email: "", adresse:"", error_list:[]};
         show1=[ ["Nom","nom"],  ["Prénom","prenom"],["Numero de telephone","numero_telephone"],["Numero fixe","numero_fixe"], ["Email","email"], ["Adresse","adresse"],];
    }else if(localStorage.getItem("Role")=== "client_dechet"){
         initialValue = { nom: "",prenom: "", nom_entreprise: "", matricule_fiscale:"", numero_telephone: "",numero_fixe:"", email: "", adresse:"", error_list:[]};
         show1=[ ["Nom","nom"],  ["Prénom","prenom"],  ["nom entreprise","nom_entreprise"], ["matricule fiscale","matricule_fiscale"],  ["Numero de telephone","numero_telephone"],["Numero fixe","numero_fixe"],["Email","email"], ["Adresse","adresse"],];
    } else if(localStorage.getItem("Role")=== "responsable_commerciale"){
      initialValue = { nom: "",prenom: "", CIN: "", numero_telephone: "", email: "", error_list:[]};
      show1=[ ["Nom","nom"], ["Carte d'identité nationnale","CIN"],["Numero de telephone","numero_telephone"] ,["Prénom","prenom"],["Email","email"], ];
    }else if(localStorage.getItem("Role")=== "responsable_personnel"){
      initialValue = { nom: "",prenom: "", CIN: "", numero_telephone: "", email: "", error_list:[]};
      show1=[ ["Nom","nom"], ["Carte d'identité nationnale","CIN"],["Numero de telephone","numero_telephone"] ,["Prénom","prenom"],["Email","email"], ];
     } 
  }
    const [validation, setValidation] = useState([])
    const [data, setData] = useState(initialValue)
    const handleFormSubmit= (e) =>  {
              fetch(`${process.env.REACT_APP_API_KEY}/api/modifier-profile`, {
                method: "post", 
                body: JSON.stringify(data), 
                headers: {
                  'content-type': "application/json",
                  'Accept': 'application/json',
                  "Authorization":`Bearer ${localStorage.getItem('auth_token')}`
                }
              }).then(resp => resp.json())
                .then(resp => {                    
                  if(resp.validation_error){
                    setValidation(resp.validation_error)
                  }else{
                     setData(resp.user) 
                     window.location.reload();
                     Swal('Success',resp.message,"success")  
                     localStorage.setItem('profile', JSON.stringify(resp.user));
                  }
                }).catch(err => {
                  console.log("Error Reading data " + err);
                });       
    }
    const onChange = (e) => {
        const { value, id } = e.target
        setData({ ...data, [id]: value })
    }
  return (
    <div>
      <div style={{ width:"90%" , margin: "10px auto 10px", columnWidth:"250px"}}>
        {show1.length!==0 ?(show1.map((sh, key) =>               
            ((sh[1]!=="id" && sh[1]!=="created_at" && sh[1]!=="updated_at" && sh[1]!=="photo")?(
                <>
                  <TextField key={key} id={sh[1]}  onChange={e=>onChange(e) } focused placeholder={profile[sh[1]]}  
                    error={!!validation[sh[1]]} label={sh[0]} variant="outlined" margin="dense" fullWidth />
                  <FormHelperText error={true}>
                    {validation[sh[1]]}        
                  </FormHelperText>                
                </>): null)
        )):null
      }
      </div>
        <Button variant="contained" className='tableIcon' color="primary" onClick={()=>handleFormSubmit()}><Typography style={{color:"white"}}>Modifier profile</Typography></Button>     
    </div>
  )
}
        