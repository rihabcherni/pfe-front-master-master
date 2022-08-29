import { Button, FormControl, FormHelperText,Link, InputAdornment, InputLabel, OutlinedInput, Paper, Typography, IconButton } from '@mui/material'
import React , {useState} from 'react'
import Image from '../../Global/images/OublierMotPasse.PNG'
import Swal from "sweetalert"
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export default function ModifierMotPasseOublier() {
    const paperStyle={ padding :40,height:550,width:850, margin:"3% auto -0%" }
    const btnstyle={ backgroundColor:'#21BA45',  margin:'20px 0'}
    const titleStyle={ color:'#21BA45',  margin:'30px 0 50px',fontSize:'25px',fontWeight:'bold', textAlign:'center'}
    const textStyle={   margin:'30px 0 20px',fontSize:'15px'}
    const initial= {code: "", mot_de_passe:"", confirme_mot_de_passe:"" ,showPassword:false, showConfirmPassword:false,error_list:[], }
    const [modifierPasswordOublier, setModifierPasswordOublier] = useState(initial);
    const handleInput =  (e) => {
      e.persist();
      setModifierPasswordOublier({ ...modifierPasswordOublier, [e.target.name]: e.target.value });
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            code: modifierPasswordOublier.code,
            mot_de_passe: modifierPasswordOublier.mot_de_passe,
            confirme_mot_de_passe: modifierPasswordOublier.confirme_mot_de_passe,
        }
        var requestOptions = {  method: 'POST',
         headers: {'content-type': "application/json"}, 
        body: JSON.stringify(data) };
        fetch(`${process.env.REACT_APP_API_KEY}/api/oublier-password-update`, requestOptions)
          .then(response => response.json()).then(res =>     { 
              if(res.status === 200 ){
                Swal('Success',res.message,"success");
                setModifierPasswordOublier({...modifierPasswordOublier,error_list:[]});
                setModifierPasswordOublier({ ...modifierPasswordOublier, code:"",mot_de_passe:"", confirme_mot_de_passe:"" });
              }else if( res.status === 404){
                setModifierPasswordOublier({...modifierPasswordOublier,error_list:res.validation_errors});
              }
            }).catch(error => console.log('error', error)); 
    };

    const handleClickShowPassword = () => {
        setModifierPasswordOublier({...modifierPasswordOublier, showPassword: !modifierPasswordOublier.showPassword,});
      };
      const handleMouseDownPassword = (event) => {event.preventDefault();}; 
    
      const handleClickShowConfirmPassword = () => {
        setModifierPasswordOublier({...modifierPasswordOublier, showConfirmPassword: !modifierPasswordOublier.showConfirmPassword,});
      };
      const handleMouseDownConfirmPassword = (event) => {event.preventDefault();}; 
    
  return (
         <Paper elevation={20} style={paperStyle}>
            <div style={{ display:"grid", gridTemplateColumns:"50% 50%" , gap:"15%"}}>  
                <div>  
                    <Typography variant='h5' style={titleStyle} >Changer ton mot de passe?</Typography>  
                    <form onSubmit={handleFormSubmit}>
                        <FormControl fullWidth variant="outlined" color="success">
                            <InputLabel htmlFor="code" sx={{width:"200px"}} > Code de vérification *</InputLabel>
                            <OutlinedInput id="code" type='text' name="code" value={modifierPasswordOublier.code}
                                onChange={handleInput} placeholder='Entrer votre code de vérification'
                                startAdornment={<InputAdornment position="start"><PersonIcon/></InputAdornment> }  
                                error={!!modifierPasswordOublier.error_list.code}  label=" Code de vérification *" 
                            />
                            <FormHelperText error={true}>
                            {modifierPasswordOublier.error_list.code}           
                            </FormHelperText> 
                        </FormControl>

                        <FormControl fullWidth margin="dense" sx={{ marginTop: 2 }} variant="outlined" color="success" >
                            <InputLabel htmlFor="mot_de_passe" >nouveau mot de passe</InputLabel>
                            <OutlinedInput id="mot_de_passe"
                                type={modifierPasswordOublier.showPassword ? 'text' : 'password'}
                                value={modifierPasswordOublier.mot_de_passe}
                                name="mot_de_passe"
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
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end" >
                                        {modifierPasswordOublier.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                    </InputAdornment>
                                }
                                error={!!modifierPasswordOublier.error_list.mot_de_passe}

                                label="nouveau mot de passe" 
                            /> 
                            <FormHelperText error={true}>
                                {modifierPasswordOublier.error_list.mot_de_passe}           
                            </FormHelperText>     
                        </FormControl>

                        <FormControl fullWidth margin="dense" sx={{ marginTop: 2 }} variant="outlined" color="success" >
                            <InputLabel htmlFor="confirme_mot_de_passe" >confirme mot de passe</InputLabel>
                            <OutlinedInput id="confirme_mot_de_passe"
                                type={modifierPasswordOublier.showConfirmPassword ? 'text' : 'password'}
                                value={modifierPasswordOublier.confirme_mot_de_passe}
                                name="confirme_mot_de_passe"
                                onChange={handleInput}
                                placeholder="confirme mot de passe"
                                startAdornment={
                                    <InputAdornment position="start">
                                    <LockIcon/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfirmPassword}
                                        onMouseDown={handleMouseDownConfirmPassword}
                                        edge="end" >
                                        {modifierPasswordOublier.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                    </InputAdornment>
                                }
                                error={!!modifierPasswordOublier.error_list.confirme_mot_de_passe}

                                label="confirme mot de passe" 
                            /> 
                            <FormHelperText error={true}>
                                {modifierPasswordOublier.error_list.confirme_mot_de_passe}           
                            </FormHelperText>     
                        </FormControl>
                        <br/>
                        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Obtenir le lien</Button>
                    </form>
                    <Typography sx={{textAlign:"center"}}>
                        <Link href="/login" >  Retour à la page de connexion  </Link>
                    </Typography>  
                </div>

                <div>
                    <img src={Image} alt="oublier mot de passe image"/>
                </div>
            </div>
        </Paper>   
      )
}
