import { Button, FormControl, FormHelperText,Link, InputAdornment, InputLabel, OutlinedInput, Paper, Typography } from '@mui/material'
import React , {useState} from 'react'
import Image from '../../Global/images/OublierMotPasse.PNG'
import Swal from "sweetalert"
import PersonIcon from '@mui/icons-material/Person';

export default function OublierMotdePasse() {
    const paperStyle={ padding :40,height:500,width:850, margin:"3% auto -0%" }
    const btnstyle={ backgroundColor:'#21BA45',  margin:'20px 0'}
    const titleStyle={ color:'#21BA45',  margin:'30px 0 50px',fontSize:'25px',fontWeight:'bold', textAlign:'center'}
    const textStyle={   margin:'30px 0 20px',fontSize:'15px'}
    const initial= {email: '',error_list:[], }
    const [emailInput, setEmailInput] = useState(initial);
    const handleInput =  (e) => {
      e.persist();
      setEmailInput({ ...emailInput, [e.target.name]: e.target.value });
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const data = {
          email: emailInput.email,
        }
        var requestOptions = {  method: 'POST',
         headers: {'content-type': "application/json"}, 
        body: JSON.stringify(data) };
        fetch(`${process.env.REACT_APP_API_KEY}/api/oublier-password-verification-code`, requestOptions)
          .then(response => response.json()).then(res =>     { 
              if(res.status === 200 ){
                Swal('Success',res.message,"success");
                setEmailInput({...emailInput,error_list:[]});
                setEmailInput({ ...emailInput, email:"" });
  
              }else if( res.status === 404){
                setEmailInput({...emailInput,error_list:res.validation_errors});
                setTimeout(()=> {setEmailInput({...emailInput,error_list:[]})} , 10000)
                setTimeout(()=> {setEmailInput({...emailInput,email:""})} , 10000)
              }else if( res.status === 400){
                Swal('Warning',res.message,"warning");
                setEmailInput({...emailInput,error_list:[]});
                setEmailInput({ ...emailInput, email:"" });
              }
            }).catch(error => console.log('error', error)); 
    };
  return (
         <Paper elevation={20} style={paperStyle}>
            <div style={{ display:"grid", gridTemplateColumns:"50% 50%" , gap:"15%"}}>  
                <div>  
                    <Typography variant='h5' style={titleStyle} >Tu as oublié ton mot de passe?</Typography>  
                    <Typography  style={textStyle}>
                        Saisis l'adresse mail utilisée pour te connecter.
                        Tu recevras un code de vérification pour réintialiser ton mot de passe.
                    </Typography>
                    <Typography>Saisis ton e-mail*</Typography>
                    <br/>
                    <form onSubmit={handleFormSubmit}>
                        <FormControl fullWidth variant="outlined" color="success">
                            <InputLabel htmlFor="Email" sx={{width:"200px"}} >Adresse Email</InputLabel>
                            <OutlinedInput id="email" type='email' name="email" value={emailInput.email}
                                onChange={handleInput} placeholder='Entrer votre email'
                                startAdornment={<InputAdornment position="start"><PersonIcon/></InputAdornment> }  
                                error={!!emailInput.error_list.email}  label="Adresse Email" 
                            />
                            <FormHelperText error={true}>
                            {emailInput.error_list.email}           
                            </FormHelperText> 
                        </FormControl>
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
