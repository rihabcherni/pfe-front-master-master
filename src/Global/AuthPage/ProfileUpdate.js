import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import '../../Global/CSS/profile.css'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Swal from "sweetalert";
import InputUpdate from './InputUpdate';
const Item = styled(Paper)(({ theme }) => ({ minWidth:"300px",
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f2f2f2',
  ...theme.typography.body2, textAlign: 'center', color: theme.palette.text.secondary,  width:"100%", margin:"20px auto",  padding:"10px",
}));
export default function ProfileUpdate() {
  var user="";
  if("auth_token" in localStorage){
    if(localStorage.getItem("Role")=== "gestionnaire"){ user="Gestionnaire";}
    else if(localStorage.getItem("Role")=== "responsable_etablissement"){ user="responsable_etablissement";}
    else if(localStorage.getItem("Role")=== "client_dechet"){user="client";}
    else if(localStorage.getItem("Role")=== "responsable_commerciale"){user="responsable_commercial";}
    else if(localStorage.getItem("Role")=== "responsable_personnel"){user="responsable_personnel";}
    else if(localStorage.getItem("Role")=== "responsable_technique"){user="responsable_technique";}
    else if(localStorage.getItem("Role")=== "reparateur_poubelle"){user="reparateur_poubelle";}
    else if(localStorage.getItem("Role")=== "mecanicien"){user="mecanicien";}
    else if(localStorage.getItem("Role")=== "ouvrier"){user="ouvrier";}
  }
  const [profile, setProfile]=useState([]);
  const [profileImg, setProfileImg]=useState("");
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`); 
  var requestOptions = { method: 'GET',  headers: myHeaders }; 
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{ if(reader.readyState === 2){  setProfileImg(reader.result) } }
    reader.readAsDataURL(e.target.files[0])
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
    var formdata = new FormData();
    formdata.append("photo", e.target.files[0], e.target.files[0].name);
    var requestOptions = {  method: 'POST', headers: myHeaders, body: formdata,};
  
    fetch(`${process.env.REACT_APP_API_KEY}/api/modifier-photo`, requestOptions)
      .then(response => response.json()).then(result =>     
        {  window.location.reload();
          Swal('Success',result.message,"success")
        }).catch(error => console.log('error', error)); }

  useEffect(() => {
    ;(async function getStatus() {
       await fetch(`${process.env.REACT_APP_API_KEY}/api/profile`, requestOptions)
      .then(response => response.json()).then(result => {  setProfile(result)})
      .catch(error => console.log('error', error));
      })() }, [])
	return (
    <Box className='profile-page'>
      <Item>
        <div style={{display:"grid"}}>
        {user!== "client"?
          <div style={{height:"100%",width:"100%"}}>
              <div className="avatar-upload">
                <div className="avatar-edit">
                  <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
                    <div className="label">
                      <label className="image-upload" htmlFor="input"><AddAPhotoIcon sx={{color:'black', marginTop:"4px"}}/></label>
                    </div>
                  </div>               
                  <div className="avatar-preview">
                    {profileImg!==null ? 
                      <img src={`${process.env.REACT_APP_API_KEY}/storage/images/${user}/${profile.photo}`} className="img" alt="Avatar"/> :
                      <img src={profileImg} alt="" id="img" className="img" />}       
                  </div>
              </div>        
          </div>:<></>}
          <div style={{alignSelf: 'stretch', width:"100%"}}>
            {profileImg!==null ? <InputUpdate/>:null} 
          </div>
        </div>
      </Item>
    </Box>
	);
}
