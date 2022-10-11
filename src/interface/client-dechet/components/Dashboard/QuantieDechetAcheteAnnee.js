import React , {useState , useEffect} from 'react'
import { Card, Container } from '@mui/material';
import {StyledTypography} from '../../../../style'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {TailSpin} from 'react-loader-spinner'
import { QuantiteDechetAcheteAnneelUrl } from '../../../../URLBackend/Client_dechet';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
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
export default function QuantieDechetAcheteAnnee() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization",  `Bearer ${localStorage.getItem('auth_token')}`);   
    var requestOptions = { method: 'GET', headers: myHeaders, redirect: 'follow'};       const [tableData,setTableData] = useState(null)
    const getData = () => {fetch(QuantiteDechetAcheteAnneelUrl, requestOptions)
      .then(response => response.json()).then(result => setTableData(result.data)).catch(error => console.log('error', error));
    }  
    useEffect(() => { 
        getData()
    } , [])
    console.log(tableData);
    if(tableData!==null){
        return (
            <Card sx={{width: "95%",margin: "0 auto"}}>
            <Container>
                <StyledTypography style={{margin:"10px 0"}}>Quantités de déchets achetées par année </StyledTypography>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Année</StyledTableCell>
                            <StyledTableCell>Nombre commande</StyledTableCell>
                            <StyledTableCell>Quantité plastique</StyledTableCell>
                            <StyledTableCell>Quantité papier</StyledTableCell>
                            <StyledTableCell>Quantité composte</StyledTableCell>
                            <StyledTableCell>Quantité canette</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {tableData.map((row, i) => (
                            <StyledTableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell>  {row.year} </TableCell>
                                <TableCell>{row.nbr_commande}</TableCell>
                                <TableCell>{row.quantite_plastique}</TableCell>
                                <TableCell>{row.quantite_papier}</TableCell>
                                <TableCell>{row.quantite_composte}</TableCell>
                                <TableCell>{row.quantite_canette}</TableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>    
            </Container>
        </Card>
        )
    }else{
        return (
            <div style={{ margin:"10% 35% 5%", verticalAlign:"center"}}>
              <TailSpin height="100" width="100" color='green' ariaLabel='loading' />
            </div>
          );
    }
}
