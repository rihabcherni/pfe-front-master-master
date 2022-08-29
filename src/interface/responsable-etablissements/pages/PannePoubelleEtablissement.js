import React, {useState , useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.mode === 'dark' ?  '#77D970' :theme.palette.common.black,
    color: theme.palette.mode === 'dark' ?  theme.palette.common.white   :theme.palette.common.white,
    fontSize: 16,
    fontFamily:'Fredoka'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

export default function PannePoubelleEtablissement() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  const [panne, setPanne] = useState(null)
  const getData = () => {
    fetch(`${process.env.REACT_APP_API_KEY}/api/auth-responsable-etablissement/panne-etablissement-poubelle-responsable`, requestOptions)
    .then(response => response.json())
    .then(result => setPanne(result))
    .catch(error => console.log('error', error));
  }
  useEffect(() => {
    getData()
  }, [])
  if(panne!==null){
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Historique des Pannes Poubelles</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">N° Panne</StyledTableCell>
                <StyledTableCell align="center">Photo</StyledTableCell>
                <StyledTableCell align="center">ID Poubelle</StyledTableCell>
                <StyledTableCell align="center">ID Réparateur</StyledTableCell>
                <StyledTableCell align="center">Description</StyledTableCell>
                <StyledTableCell align="center">Coùt (en DT)</StyledTableCell>
                <StyledTableCell align="center">Date Début</StyledTableCell>
                <StyledTableCell align="center">Date Fin</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>       
              {panne.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="center">{row.id}</StyledTableCell>
                  <StyledTableCell align="center">
                    <img src={`${process.env.REACT_APP_API_KEY}/storage/images/pannePoubelle/${row.image_panne_poubelle}`} 
                      style={{height:"100px", width:"100px"}}/>
                  </StyledTableCell>
                  <StyledTableCell align="center"> {row.poubelle_id} </StyledTableCell>
                  <StyledTableCell align="center"> {row.reparateur_poubelle_id} </StyledTableCell>
                  <StyledTableCell align="center"> {row.description_panne} </StyledTableCell>
                  <StyledTableCell>{row.cout}</StyledTableCell>
                  <StyledTableCell>{row.date_debut_reparation}</StyledTableCell>
                  <StyledTableCell>{row.date_fin_reparation}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>       
      </div>
    )
  }else{
    return <></>
  }
} 