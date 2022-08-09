import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link } from "react-router-dom"
import AvatarNav from './AvatarNav'
import DashboardIcon from '@mui/icons-material/Dashboard';
export default function ComponentConnexion() {
    const Connexion=()=> {
      if("auth_token" in localStorage){
          return <div style={{display:"grid", gridTemplateColumns:"20% 70%", alignItems: 'center'}}>
                    <div><Link to="/login"><DashboardIcon sx={{ fontSize:"40px !important", color:"#60d249" }} /></Link></div>
                    <AvatarNav couleur="#60d249"/>
                 </div>
      }else { return <Button as={Link} to="/login"  color='green'>Se connecter</Button>}
    }
  return (
      <Connexion/>
  )
}
