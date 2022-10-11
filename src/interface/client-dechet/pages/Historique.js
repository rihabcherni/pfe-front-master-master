import  React , {useState ,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Skeleton } from '@mui/material';
import {HistoriqueCommandeClientUrl} from '../../../URLBackend/Client_dechet'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.mode === 'dark' ?  '#77D970' :theme.palette.common.black,
    color: theme.palette.mode === 'dark' ?  theme.palette.common.white   :theme.palette.common.white,
    fontSize: 14,
    fontFamily:'Fredoka'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    fontFamily:'Fredoka',
    backgroundColor: theme.palette.mode === 'dark' ? '#F6F6F6'  : '#4E9F3D'  ,
    color: theme.palette.mode === 'dark' ?  theme.palette.common.black : theme.palette.common.black,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export default function Historique() {
  const [data, setData] = useState(null)
  var myHeaders = new Headers();
  myHeaders.append("Authorization",  `Bearer ${localStorage.getItem('auth_token')}`);
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  const getData = () => {
    fetch(HistoriqueCommandeClientUrl, requestOptions)
      .then(response => response.json())
      .then(result => setData(result.data))
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
      getData()
  }, [])
  
  if(data!==null){
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead>
              <TableRow>
                  <StyledTableCell align="center">Id commande</StyledTableCell>
                  <StyledTableCell align="center">Quantité plastique</StyledTableCell>
                  <StyledTableCell align="center">Quantité papier</StyledTableCell>
                  <StyledTableCell align="center">Quantité composte</StyledTableCell>
                  <StyledTableCell align="center">Quantité canette</StyledTableCell>
                  <StyledTableCell align="center">Prix plastique</StyledTableCell>
                  <StyledTableCell align="center">Prix papier</StyledTableCell>
                  <StyledTableCell align="center">Prix composte</StyledTableCell>
                  <StyledTableCell align="center">Prix canette</StyledTableCell>

                  <StyledTableCell align="center">Montant total</StyledTableCell>
                  <StyledTableCell align="center">Type paiment</StyledTableCell>
                  <StyledTableCell align="center" style={{backgroundColor:"red"}}>Date commande</StyledTableCell>
                  <StyledTableCell align="center">Date livraison</StyledTableCell> 
              </TableRow>
          </TableHead>
          <TableBody>  
            {data.map((row) => (
                <StyledTableRow key={row.id}>
                    <StyledTableCell align="center">{row.id}</StyledTableCell>
                    <StyledTableCell align="center">{row.quantite_plastique}  KG</StyledTableCell>
                    <StyledTableCell align="center">{row.quantite_papier} KG</StyledTableCell>
                    <StyledTableCell align="center">{row.quantite_composte} KG</StyledTableCell>
                    <StyledTableCell align="center">{row.quantite_canette} KG</StyledTableCell>
                    <StyledTableCell align="center">{row.prix_plastique} DT</StyledTableCell>
                    <StyledTableCell align="center">{row.prix_papier} DT</StyledTableCell>
                    <StyledTableCell align="center">{row.prix_composte} DT</StyledTableCell>
                    <StyledTableCell align="center">{row.prix_canette} DT</StyledTableCell>
                    <StyledTableCell align="center">{row.montant_total} DT</StyledTableCell>
                    <StyledTableCell align="center">{row.type_paiment} DT</StyledTableCell>
                    <StyledTableCell align="center" style={{backgroundColor:"red", color:"white"}}>{row.date_commande}</StyledTableCell>
                    <StyledTableCell align="center">{row.date_livraison}</StyledTableCell> 
                </StyledTableRow>
            ))}
          </TableBody>
      </Table>
    </TableContainer>    
  )
}else{
  return (
    <>
      <div >
          <Skeleton variant="rectangular"  height={20}/>
          <Skeleton variant="rectangular"  height={20}/>
          <Skeleton variant="rectangular"  height={20}/>
          <Skeleton variant="rectangular"  height={20}/>
      </div>
    </>
  );
}}