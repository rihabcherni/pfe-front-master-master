import  React , {useState ,useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { styled as muiStyle} from '@mui/material/styles';
import { Table, TableBody, TableHead, TableRow, TableCell, Chip } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ErrorIcon from '@mui/icons-material/Error';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import BadgeIcon from '../components/Planning/BadgeIcon';
import StyledRow from '../components/Planning/StyledRow';
import styled from 'styled-components';
import Typography from '@mui/material/Typography'

const Cell = muiStyle(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f2f2f2',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

const EmptyCell = muiStyle(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'white',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

const useStyles = makeStyles({
  cellBorderRight: {
    borderRight: "1px solid lightgray"
  }
});

const Badges = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: right;
  padding-right: 10px;
  padding-bottom: 10px;
`

const Badge = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin: 5px;
`

const Item = styled.div` 
  background-color: theme.palette.mode === 'dark' ?  '#000':'#f0f0f0';
  border: 2px solid #f0f0f0 ;
  padding: 15px;
  margin: 5px;
  color: green;
`

const myPlanning = "http://127.0.0.1:8000/api/auth-responsable-etablissement/planning-responsable";

export default function Planning() {

  const classes = useStyles();

  const [planning, setPlanning] = useState([])
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  const getPlanning = () => {
    fetch(myPlanning, requestOptions)
      .then(response => response.json())
      .then(result => setPlanning(result))
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    getPlanning()
  }, [])
  // console.log(planning)
  if(planning.length!== 0){
  return (
    <div className="container_dashboard">
      <div>
        <div>
          <Typography variant='h5' sx={{color: "green",fontWeight:"600", fontFamily:"Fredoka"}}>Planning des collectes de déchets </Typography>
          <br/>
          <Item>
          {/* <div>
            <BadgeIcon color="green" icon={<DoneIcon/>} />
            <BadgeIcon color="#E67E22" icon={<HourglassBottomIcon/>} />
            <BadgeIcon color="#C0392B" icon={<ErrorIcon/>} />
          </div> */}
          <Badges style={{float: 'right'}}>
            <div>
              <Badge>
                <Chip color="success" icon={<DoneIcon />} />
                <Typography sx={{paddingLeft: "10px", paddingTop: "5px"}}>Collecte établie avec succés</Typography>
              </Badge>
              <Badge>
                <Chip color="error" icon={<ErrorIcon />} />
                <Typography sx={{paddingLeft: "10px", paddingTop: "5px"}}>Problème lors de la collecte</Typography>
              </Badge>
            </div>
            <div>
              <Badge>
                <Chip color="info" icon={<AlarmOnIcon />} />
                <Typography sx={{paddingLeft: "10px", paddingTop: "5px"}}>Collecte confirmé</Typography>
              </Badge>
              <Badge>
                <Chip color="warning" icon={<HourglassBottomIcon />} />
                <Typography sx={{paddingLeft: "10px", paddingTop: "5px"}}>Collecte non confirmé</Typography>
              </Badge>
            </div>
          </Badges>
        
          <Table>
            <TableHead>
              <TableRow >
                <EmptyCell sx={{ borderStyle:"none"}}></EmptyCell>
                <TableCell sx={{backgroundColor: "rgb(50 , 31 , 219 , 0.8)"}}></TableCell>
                <TableCell sx={{backgroundColor: "rgb(50 , 31 , 219 , 0.8)", color: "white", fontWeight: "700", fontSize: "15px"}}>
                  Plastique
                </TableCell>
                <TableCell sx={{backgroundColor: "rgb(50 , 31 , 219 , 0.8)"}} ></TableCell>
                
                <TableCell sx={{backgroundColor: "rgb(249,177,21, 0.8)"}}></TableCell>
                <TableCell sx={{backgroundColor: "rgb(249,177,21, 0.8)", color: "white", fontWeight: "700", fontSize: "15px"}}>
                  Papier
                </TableCell>
                <TableCell sx={{backgroundColor: "rgb(249,177,21, 0.8)"}}></TableCell>

                <TableCell sx={{backgroundColor: "rgb(46, 184, 92 , 0.8)"}}></TableCell>
                <TableCell sx={{backgroundColor: "rgb(46, 184, 92 , 0.8)", color: "white", fontWeight: "700", fontSize: "15px"}}>
                  Composte
                </TableCell>
                <TableCell sx={{backgroundColor: "rgb(46, 184, 92 , 0.8)"}}></TableCell>

                <TableCell sx={{backgroundColor: "rgb(229,83,83, 0.8)"}}></TableCell>
                <TableCell sx={{backgroundColor: "rgb(229,83,83, 0.8)", color: "white", fontWeight: "700", fontSize: "15px"}}>
                  Canette
                </TableCell>
                <TableCell sx={{backgroundColor: "rgb(229,83,83, 0.8)"}}></TableCell>
              </TableRow>
              <TableRow >
                <EmptyCell className={classes.cellBorderRight}></EmptyCell>
                <Cell align="center" >6h-12h</Cell>
                <Cell align="center">13h-15h</Cell>
                <Cell className={classes.cellBorderRight} align="center">16h-19h</Cell>
                <Cell align="center">6h-12h</Cell>
                <Cell align="center">13h-15h</Cell>
                <Cell className={classes.cellBorderRight} align="center">16h-19h</Cell>
                <Cell align="center">6h-12h</Cell>
                <Cell align="center">13h-15h</Cell>
                <Cell className={classes.cellBorderRight} align="center">16h-19h</Cell>
                <Cell align="center">6h-12h</Cell>
                <Cell align="center">13h-15h</Cell>
                <Cell className={classes.cellBorderRight} align="center">16h-19h</Cell>
              </TableRow>
            </TableHead>
            
            <TableBody>
              {planning.length!==0 ?(planning.map((row) =>               
                <StyledRow jourSemaine={row[0]} data={row[1]} />
              )) :null}  
            </TableBody>
          </Table>
          </Item>
        </div>
      </div>
    </div>
  )} else {
    return <></>
  }
}
