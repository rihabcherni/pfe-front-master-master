import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { styled as muiStyle} from '@mui/material/styles';
import { TableRow, TableCell, Chip } from '@mui/material';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import DoneIcon from '@mui/icons-material/Done';
import ErrorIcon from '@mui/icons-material/Error';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import styled from 'styled-components';

const Cell = muiStyle(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'white',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

const useStyles = makeStyles({
  cellBorderRight: {
    borderRight: "1px solid lightgray"
  },

  cellBorderLeftRight: {
    borderRight: "1px solid lightgray",
    borderLeft: "1px solid lightgray"
  }
});


const Badge = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin: 5px;
`


const affichageCellules = (start, statut, border) => {
  if (start=='6')
      return (
        <>
          <TableCell >{statut}</TableCell>
          <TableCell ></TableCell>
          <TableCell  className={border}></TableCell>  
        </> 
      );
  else if (start=='13')
    return (
      <>
        <TableCell ></TableCell>
        <TableCell>{statut}</TableCell>
        <TableCell  className={border}></TableCell>  
      </> 
    );
  else if (start=='16')
    return (
      <>
        <TableCell ></TableCell>
        <TableCell></TableCell>
        <TableCell  className={border}>{statut}</TableCell>  
      </> 
    );
  else
    return (
      <>
        <TableCell ></TableCell>
        <TableCell ></TableCell>
        <TableCell className={border}></TableCell>  
      </> 
    );
}

export default function StyledRow({jourSemaine, data}) {
  const classes = useStyles();

  if(data!=null){
    return (  
      <TableRow>
        <Cell className={classes.cellBorderLeftRight}>{jourSemaine}</Cell>
        {data.map((row, id) =>
          <If condition={row.start == '6'}>
            <Then>
              <Cell >
                <If condition={row.statut == 'non confirmed'}>
                  <Then>
                    <Badge>
                      <Chip color="warning" icon={<HourglassBottomIcon />} />
                    </Badge>
                  </Then>
                  <ElseIf condition={row.statut == 'confirmed'}>
                    <Badge>
                      <Chip color="info" icon={<AlarmOnIcon />} />
                    </Badge>
                  </ElseIf>
                  <ElseIf condition={row.statut == 'collected'}>
                    <Badge>
                      <Chip color="success" icon={<DoneIcon />} />
                    </Badge>
                  </ElseIf>
                  <ElseIf condition={row.statut == 'problem'}>
                    <Badge>
                      <Chip color="error" icon={<ErrorIcon />} />
                    </Badge>
                  </ElseIf>
                </If>         
              </Cell>
              <Cell ></Cell>
              <Cell className={classes.cellBorderRight}></Cell>  
            </Then>
            <ElseIf condition={row.start == '13'}>
              <Cell ></Cell>
              <Cell >
                <If condition={row.statut == 'non confirmed'}>
                  <Then>
                    <Badge>
                      <Chip color="warning" icon={<HourglassBottomIcon />} />
                    </Badge>
                  </Then>
                  <ElseIf condition={row.statut == 'confirmed'}>
                    <Badge>
                      <Chip color="info" icon={<AlarmOnIcon />} />
                    </Badge>
                  </ElseIf>
                  <ElseIf condition={row.statut == 'collected'}>
                    <Badge>
                      <Chip color="success" icon={<DoneIcon />} />
                    </Badge>
                  </ElseIf>
                  <ElseIf condition={row.statut == 'problem'}>
                    <Badge>
                      <Chip color="error" icon={<ErrorIcon />} />
                    </Badge>
                  </ElseIf>
                </If>
              </Cell>
              <Cell className={classes.cellBorderRight}></Cell>  
            </ElseIf>
            <ElseIf condition={row.start == '16'}>           
              <Cell ></Cell>
              <Cell ></Cell>
              <Cell className={classes.cellBorderRight}>
                <If condition={row.statut == 'non confirmed'}>
                  <Then>
                    <Badge>
                      <Chip color="warning" icon={<HourglassBottomIcon />} />
                    </Badge>
                  </Then>
                  <ElseIf condition={row.statut == 'confirmed'}>
                    <Badge>
                      <Chip color="info" icon={<AlarmOnIcon />} />
                    </Badge>
                  </ElseIf>
                  <ElseIf condition={row.statut == 'collected'}>
                    <Badge>
                      <Chip color="success" icon={<DoneIcon />} />
                    </Badge>
                  </ElseIf>
                  <ElseIf condition={row.statut == 'problem'}>
                    <Badge>
                      <Chip color="error" icon={<ErrorIcon />} />
                    </Badge>
                  </ElseIf>
                </If>
              </Cell>             
            </ElseIf>
            <Else>             
              <Cell > -</Cell>
              <Cell > -</Cell>
              <Cell className={classes.cellBorderRight}> -</Cell>               
            </Else>
          </If>
          )   
        }
      </TableRow>
      )
    }
    else return <>Erreur!</>;    
}
