import React from 'react'
import { Paper} from '@mui/material'
import QuantiteCollecteAnneefilter from './QuantiteCollecteAnneefilter'
import QuantiteCollecteMois from './QuantiteCollecteMois'
import { styled } from '@mui/material/styles';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? "#2c2c2c" : "#FFF",
  border: theme.palette.mode === 'dark' ? "rgb(88, 88, 88) solid 3px":'#FFF solid 3px', boxShadow:"0px 1px 8px 1px rgb(125, 125, 125)",
  ...theme.typography.body2 , marginBottom: theme.spacing(1), textAlign: 'center', color: theme.palette.text.secondary,
} ));
export default function Quantite() {

  return (
    <div style={{display:"grid", gridTemplateColumns:"62% 36%", gap:"2%"}}>
        <div>
          <Item><QuantiteCollecteMois/></Item>           
        </div>
        <div>
          <Item><QuantiteCollecteAnneefilter/></Item>
        </div>
    </div>
  )
}