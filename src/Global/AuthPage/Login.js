import React , {useState} from 'react'
import { Grid,Paper, Avatar, Button, Typography,Link,FormControl,FormHelperText,InputLabel,OutlinedInput,InputAdornment ,IconButton} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert"
import styled from 'styled-components'
import LogoImage from '../images/reschool-blanc.png'

axios.defaults.baseURL= `${process.env.REACT_APP_API_KEY}/api`;
let token='';
if(localStorage.getItem('auth_token')!==''){
	 token=localStorage.getItem('auth_token');
	 axios.interceptors.request.use(function(config){
		config.headers.Authorization = token ? `Bearer ${token}` : '' ; 
		return config;
    });
}
const Login=()=>{
  const [loginRecaptcha, setLoginRecaptcha] = useState("");

  function onChange(value) {
    setLoginRecaptcha(value);
  }
    const navigate = useNavigate();
    const [loginInput, setLoginInput] = useState({email: '',mot_de_passe: '' ,recaptcha:'',showPassword: false,error_list:[], });
    const handleInput =  (e) => {
      e.persist();
      setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
    };
    const loginSubmit = (e) => {
      e.preventDefault();
      const data = {
        email: loginInput.email,
        mot_de_passe:loginInput.mot_de_passe,
        recaptcha:loginInput.recaptcha,
      }
      axios.get('sanctum/csrf-cookie').then(response => {
        axios.post(`api/login`,data).then(res =>{
          if(res.data.status === 200 ){
            localStorage.setItem('profile', JSON.stringify(res.data.user));
            localStorage.setItem('auth_token',res.data.token);
            localStorage.setItem('Role',res.data.Role);
            window.location.reload();   
            console.log(res.data)
            setTimeout(navigate("/gestionnaire"),10000) ;  
            Swal('Success',res.data.message,"success");
          }else if(res.data.status === 401){
            setLoginInput({...loginInput,error_list:res.data.validation_errors});
          }
        }) 
      })
    };
    const handleClickShowPassword = () => {
      setLoginInput({
        ...loginInput,
        showPassword: !loginInput.showPassword,
      });
    };
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };    
    const paperStyle={ padding :40,height:550,width:400, margin:"-4% auto 0" }
    const avatarStyle={  backgroundColor:'#21BA45',width:60,height:60}
    const btnstyle={ backgroundColor:'#21BA45',  margin:'8px 0'}
    return(
        <Grid>
            <img width='80px' src={LogoImage} /> 
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                     <h2 style={{paddingBottom:"30px", marginTop:"5px"}}>Connexion</h2>
                </Grid>
                <form onSubmit={loginSubmit}>
                      <FormControl fullWidth variant="outlined" color="success">
                          <InputLabel htmlFor="Email" sx={{width:"200px"}} >Adresse Email</InputLabel>
                          <OutlinedInput id="email" type='email' name="email" value={loginInput.email}
                            onChange={handleInput} placeholder='Entrer votre email'
                            startAdornment={<InputAdornment position="start"><PersonIcon/></InputAdornment> }  
                            error={!!loginInput.error_list.email}  label="Adresse Email" 
                          />
                            <FormHelperText error={true}>
                            {loginInput.error_list.email}           
                          </FormHelperText> 
                      </FormControl>
                      
                      <FormControl fullWidth sx={{ marginTop: 2 }} variant="outlined" color="success" >
                          <InputLabel htmlFor="mot_de_passe" >Mot de passe</InputLabel>
                          <OutlinedInput 
                            id="mot_de_passe"
                            type={loginInput.showPassword ? 'text' : 'password'}
                            value={loginInput.mot_de_passe}
                            name="mot_de_passe"
                            onChange={handleInput}
                            placeholder='Entrer votre mot de passe'
                            startAdornment={
                              <InputAdornment position="start">
                                <LockIcon/>
                              </InputAdornment>
                            }
                            endAdornment={<InputAdornment position="end">
                                            <IconButton
                                              aria-label="toggle password visibility"
                                              onClick={handleClickShowPassword}
                                              onMouseDown={handleMouseDownPassword}
                                              edge="end" >
                                                {loginInput.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                          </InputAdornment>
                            }
                            error={!!loginInput.error_list.mot_de_passe}

                            label="mot de passe" /> 
                            <FormHelperText error={true}>
                            {loginInput.error_list.mot_de_passe}           
                          </FormHelperText> 
                      </FormControl>
                      <br/>
                      <br/>
                      <FormControl fullWidth sx={{ marginTop: 2 }} variant="outlined" color="success" >
                        <ReCAPTCHA sitekey='6Ld4vbMgAAAAAMKnTX3uhIXnHmrEm6CyzoPBSIJq' onChange={onChange}  />          
                        <OutlinedInput id="recaptcha" type='text' name="recaptcha" value={loginInput.recaptcha=loginRecaptcha}
                            onChange={handleInput} 
                            startAdornment={<InputAdornment position="start"><PersonIcon/></InputAdornment> }  
                            error={!!loginInput.error_list.recaptcha}  label=" recaptcha" 
                            sx={{ display:"none" }}
                          />
                        <FormHelperText error={true}>
                            {loginInput.error_list.recaptcha}           
                        </FormHelperText> 
                      </FormControl>
                      <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth> Se connecter </Button>
                      <Typography sx={{textAlign:"center"}}>
                        <Link href="/oublier-mot-de-passe" >
                          Avez-vous oublier votre mot de passe ?
                        </Link>
                      </Typography>
                </form>
            </Paper>        
        </Grid>
    )
}
export default Login;
