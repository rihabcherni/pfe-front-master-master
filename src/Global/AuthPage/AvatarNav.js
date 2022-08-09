import React , {useState , useEffect} from 'react'
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { ListItemIcon } from '@mui/material';
import { IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ProfilePhoto from "../images/default_profile_image.jpg"
import { Link  ,useNavigate} from 'react-router-dom';
import Swal from "sweetalert";
import axios from "axios";
import {StyledBadge} from '../../style'
import HttpsIcon from '@mui/icons-material/Https';
export default function AvatarNav(props) {
  var user ="";
  var fileName ="";
  if("auth_token" in localStorage){
    if(localStorage.getItem("Role")=== "gestionnaire"){
        user="gestionnaire";
        fileName="gestionnaire";
    }else if(localStorage.getItem("Role")=== "responsable_etablissement"){
        user="responsable-etablissement"
        fileName="responsable-etablissement"
    }else if(localStorage.getItem("Role")=== "client_dechet"){
        user="client-dechets"
        fileName="client"
    }
  }
  const logoutSubmit= (e)=>{
    e.preventDefault();
    axios.post(`api/logout`).then(res=>{
      if(res.data.status===200){
        localStorage.removeItem('auth_token');
        localStorage.removeItem('Role');
        localStorage.removeItem('profile');
        Swal('Success',res.data.message,"success")
        navigate("/")   
      }
    })
  }
  var AuthButtons='';
    if(localStorage.getItem('auth_token')){
      AuthButtons=( <li onClick={logoutSubmit} style={{color:"green"}}>Se Déconnecter</li> )
  }
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }; 
/*------------- Message --------------*/
  const [inbox, setInbox] = useState(null);
  const openInbox = Boolean(inbox);
  const clickInbox = (event) => {setInbox(event.currentTarget);};
  const closeInbox = () => {setInbox(null); };
/*------------- Notification --------------*/
  const [notification, setNotification] = useState(null);
  const openNotification = Boolean(notification);
  const clickNotification = (event) => { setNotification(event.currentTarget);};
  const closeNotification = () => {setNotification(null);};
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
/*------------- image avatar --------------*/

  const [profile, setProfile] = useState(null)
  const getData = () => {
    fetch("http://127.0.0.1:8000/api/profile", requestOptions)
    .then(response => response.json())
    .then(result => setProfile(result))
    .catch(error => console.log('error', error));
  }
    useEffect(() => {
      getData()
    }, [])
    let image = [];
    if(profile!==null ){
        if(profile.photo!==null){
            image.push(<><Avatar alt={profile.nom} src={`http://127.0.0.1:8000/storage/images/${fileName}/${profile.photo}`}/></>);
        }else{image.push(<><Avatar alt="user image" src={ProfilePhoto}/></>)} 
        }else{image.push(<><Avatar alt="user image" src={ProfilePhoto} /></>);}  
  return (
     <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Tooltip title="Messages">
           <IconButton size="large" aria-label="show 4 new mails" color="secondary" id="inbox-button" aria-controls={openInbox ? 'inbox-menu' : undefined} 
               aria-haspopup="true" aria-expanded={openInbox ? 'true' : undefined} onClick={clickInbox}>
                  <Badge badgeContent={4} color="error"><MailIcon sx={{color:`${props.couleur}`}}/></Badge>
            </IconButton>
        </Tooltip>
        <Menu id="inbox-menu"  MenuListProps={{ 'aria-labelledby': 'inbox-button' }} anchorEl={inbox} open={openInbox} onClose={closeInbox} TransitionComponent={Fade} >
              <MenuItem onClick={closeInbox}>Message 1</MenuItem>
              <MenuItem onClick={closeInbox}>Message 2</MenuItem>
              <MenuItem onClick={closeInbox}>Message 3</MenuItem>
              <MenuItem onClick={closeInbox}>Message 4</MenuItem>
        </Menu> 

        <Tooltip title="Notifications">
          <IconButton  size="large"  aria-label="show 17 new notifications" color="secondary" id="notification-button" aria-controls={openNotification ? 'notification-menu' : undefined} 
              aria-haspopup="true" aria-expanded={openNotification ? 'true' : undefined} onClick={clickNotification}>
                    <Badge badgeContent={17} color="error"><NotificationsIcon sx={{color:`${props.couleur}`}}/></Badge>
          </IconButton>
        </Tooltip>
        <Menu id="notification-menu"  MenuListProps={{ 'aria-labelledby': 'notification-button' }} anchorEl={notification} open={openNotification}  onClose={closeNotification} TransitionComponent={Fade} >
              <MenuItem onClick={closeNotification}>Notification 1</MenuItem>
              <MenuItem onClick={closeNotification}>Notification 2</MenuItem>
              <MenuItem onClick={closeNotification}>Notification 3</MenuItem>
              <MenuItem onClick={closeNotification}>Notification 4</MenuItem>
        </Menu> 
        <Tooltip title="Profile">
          <Button id="fade-button" aria-controls={open?'fade-menu':undefined} aria-haspopup="true" aria-expanded={open ?'true':undefined} onClick={handleClick} color='secondary'>
            <StyledBadge overlap="circular" anchorOrigin={{vertical:'bottom',horizontal:'right'}} variant="dot">{image[0]}</StyledBadge>    
          </Button>
        </Tooltip>
        <Menu  id="fade-menu" MenuListProps={{ 'aria-labelledby': 'fade-button'}} anchorEl={anchorEl} open={open}  onClose={handleClose} TransitionComponent={Fade}>
                <MenuItem onClick={handleClose} sx={{color:"green"}}>
                    <Link to ={`/${user}/profile`} >
                      <ListItemIcon > <Avatar sx={{width:"20px",height:"20px"}}/></ListItemIcon>
                      <span style={{color:"green"}}> Mon Profile  </span>
                    </Link> 
                </MenuItem>    
                
                <MenuItem onClick={handleClose} >
                  <Link to ={`/${user}/modifier-mot-de-passe`}>
                    <ListItemIcon> <HttpsIcon   fontSize="small" /> </ListItemIcon>
                      <li style={{color:"green", display:"inline"}}>Changer mot de passe</li>  
                  </Link> 
                </MenuItem>     
                <MenuItem onClick={handleClose}> <ListItemIcon> <Logout fontSize="small" /></ListItemIcon>{AuthButtons}</MenuItem>
        </Menu>
        
    </Box>
  ) 
}
