import React from 'react'
import { Button } from '@mui/material';
import '../CSS/Page-error.css'
import { useNavigate } from "react-router-dom";
import Image401 from '../../Global/images/401.png'
import Logo from '../../Global/images/reschool-blanc.png'

export default function Page401() {
  const navigate = useNavigate();
  let linkPagePrincipale='';
  if(localStorage.getItem('Role')==='gestionnaire'){
    linkPagePrincipale='/gestionnaire'
  }else if(localStorage.getItem('Role')==='responsable_etablissement'){
    linkPagePrincipale='/responsable-etablissement'
  }else if(localStorage.getItem('Role')==='client_dechet'){
    linkPagePrincipale='/client-dechets'
  }else if(localStorage.getItem('Role')==='responsable_commerciale'){
    linkPagePrincipale='/responsable-commerciale'
  }else if(localStorage.getItem('Role')==='responsable_personnel'){
    linkPagePrincipale='/responsable-personnel'
  }else if(localStorage.getItem('Role')==='responsable_technique'){
    linkPagePrincipale='/responsable-technique'
  }else if(localStorage.getItem('Role')==='reparateur_poubelle'){
    linkPagePrincipale='/reparateur-poubelle'
  }else if(localStorage.getItem('Role')==='mecanicien'){
    linkPagePrincipale='/mecanicien'
  }else if(localStorage.getItem('Role')==='ouvrier'){
    linkPagePrincipale='/ouvrier'
  }
  return (
    <div className='page-error'>
      <img src={Logo} alt="logo"  className='logo-error'/>
      <div className='container-error'>
          <img src={Image401} alt="Image 401" className='image-error'/>
          <h1  className='messgae-error1'>Non autorisé  </h1>
          <h3 className='messgae-error2'> 
              Désolé, il vous est interdit de visiter cette page, essayez d'abord de vous connecter 
          </h3> 
              <Button color="success" variant="contained"  
                sx={{textTransform:"none",backgroundColor:"#64ad02", marginRight:"20px"}}
                onClick={() => navigate(linkPagePrincipale)} > Revenir à la page principale 
              </Button> 
              <Button color="success"  onClick={() => navigate(-1)} variant="contained"  
                sx={{backgroundColor:"#64ad02",textTransform:"none"}}> 
                Allons à la dernière page visitée  
              </Button>  
          </div>
    </div>
  )
}

