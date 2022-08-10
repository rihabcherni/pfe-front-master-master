import React , {useState , useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {TailSpin} from 'react-loader-spinner'

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
export default function TableStatPanne({url}) {
    var requestOptions = { method: 'GET', redirect: 'follow'};   
    const [tableData,setTableData] = useState(null)
    const getData = () => {fetch(url, requestOptions)
      .then(response => response.json()).then(result => setTableData(result.data)).catch(error => console.log('error', error));
    }  
    useEffect(() => { 
        getData()
    } , [])
    console.log(tableData);
    if(tableData!==null){
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Année</StyledTableCell>
                        <StyledTableCell>Nombre</StyledTableCell>
                        <StyledTableCell>Cout</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {tableData.map((row, i) => (
                        <StyledTableRow
                        key={i}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell>  {row.year} </TableCell>
                        <TableCell>{row.nbr}</TableCell>
                        <TableCell>{row.cout}</TableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }else{
        return (
            <div style={{ margin:"10% 35% 5%", verticalAlign:"center"}}>
              <TailSpin height="100" width="100" color='green' ariaLabel='loading' />
            </div>
          );
    }
}
