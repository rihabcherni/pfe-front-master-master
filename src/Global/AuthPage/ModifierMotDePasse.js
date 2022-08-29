import React , {useState }  from 'react'
import { Grid,Paper, Avatar, Button,FormControl,FormHelperText,InputLabel,OutlinedInput,InputAdornment ,IconButton} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Swal from "sweetalert"
const paperStyle={
  padding :40,height:400,width:400, margin:"10% auto"
}
const avatarStyle={
  backgroundColor:'#21BA45',width:60,height:60
} 
export default function ModifierMotDePasse() { 
  const initial= {nouveau_mot_de_passe: '',mot_de_passe: '',showPassword: false,showNewPassword: false,error_list:[], }
  const [updatePasswordInput, setUpdatePasswordInputt] = useState(initial);
  const handleInput =  (e) => {
    e.persist();
    setUpdatePasswordInputt({ ...updatePasswordInput, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
      e.preventDefault();
      const data = {
        nouveau_mot_de_passe: updatePasswordInput.nouveau_mot_de_passe,
        mot_de_passe:updatePasswordInput.mot_de_passe,
      }
      var requestOptions = {  method: 'POST',
       headers: {'content-type': "application/json","Authorization":`Bearer ${localStorage.getItem('auth_token')}`}, 
      body: JSON.stringify(data) };
      fetch(`${process.env.REACT_APP_API_KEY}/api/modifier-password`, requestOptions)
        .then(response => response.json()).then(res =>     { 
            if(res.status === 200 ){
              Swal('Success',res.message,"success");
              setUpdatePasswordInputt({...updatePasswordInput,error_list:[]});
              setUpdatePasswordInputt({ ...updatePasswordInput, nouveau_mot_de_passe:"" ,mot_de_passe:"" });

            }else if( res.status === 401){
              setUpdatePasswordInputt({...updatePasswordInput,error_list:res.validation_errors});
              setTimeout(()=> {setUpdatePasswordInputt({...updatePasswordInput,error_list:[], nouveau_mot_de_passe:"" ,mot_de_passe:"" })} , 10000)
            }
          }).catch(error => console.log('error', error)); 
  };
  
  const handleClickShowPassword = () => {
    setUpdatePasswordInputt({...updatePasswordInput, showPassword: !updatePasswordInput.showPassword,});
  };
  const handleMouseDownPassword = (event) => {event.preventDefault();}; 

  const handleClickShowNewPassword = () => {
    setUpdatePasswordInputt({...updatePasswordInput, showNewPassword: !updatePasswordInput.showNewPassword,});
  };
  const handleMouseDownNewPassword = (event) => {event.preventDefault();}; 

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
              <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
              <h2 style={{paddingBottom:"30px", marginTop:"5px"}}>Modifier mot de passe</h2>
          </Grid>
            <form  onSubmit={handleFormSubmit}>                                      
              <FormControl focused fullWidth margin="dense" sx={{ marginTop: 2 }} variant="outlined" color="success" >
                  <InputLabel htmlFor="mot_de_passe" >ancien mot de passe</InputLabel>
                  <OutlinedInput id="mot_de_passe"
                      type={updatePasswordInput.showPassword ? 'text' : 'password'}
                      value={updatePasswordInput.mot_de_passe}
                      name="mot_de_passe"
                      onChange={handleInput}
                      placeholder="ancien mot de passe"
                      startAdornment={
                        <InputAdornment position="start">
                          <LockIcon/>
                        </InputAdornment>
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end" >
                              {updatePasswordInput.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      error={!!updatePasswordInput.error_list.mot_de_passe}

                      label="ancien mot de passe" 
                  /> 
                  <FormHelperText error={true}>
                    {updatePasswordInput.error_list.mot_de_passe}           
                  </FormHelperText>     
              </FormControl>
              <FormControl focused fullWidth margin="dense" sx={{ marginTop: 2 }} variant="outlined" color="success" >
                  <InputLabel htmlFor="nouveau_mot_de_passe" >nouveau mot de passe</InputLabel>
                  <OutlinedInput id="nouveau_mot_de_passe"
                      type={updatePasswordInput.showNewPassword ? 'text' : 'password'}
                      value={updatePasswordInput.nouveau_mot_de_passe}
                      name="nouveau_mot_de_passe"
                      onChange={handleInput}
                      placeholder="nouveau mot de passe"
                      startAdornment={
                        <InputAdornment position="start">
                          <LockIcon/>
                        </InputAdornment>
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowNewPassword}
                            onMouseDown={handleMouseDownNewPassword}
                            edge="end" >
                              {updatePasswordInput.showNewPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      error={!!updatePasswordInput.error_list.nouveau_mot_de_passe}

                      label="nouveau mot de passe" 
                  /> 
                  <FormHelperText error={true}>
                    {updatePasswordInput.error_list.nouveau_mot_de_passe}           
                  </FormHelperText>     
              </FormControl>
              <Button variant="contained" className='tableIcon'  type='submit'
              sx={{margin:"10px 0 0 120px" , width:"200px" ,color:"white", fontWeight:"bold" ,backgroundColor:'#21BA45'}}>modifier</Button>     
            </form>

      </Paper>    
    </Grid>
  )
}
