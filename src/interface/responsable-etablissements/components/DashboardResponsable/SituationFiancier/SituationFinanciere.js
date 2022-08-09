import React from 'react'
import PrixActuelleGlobale from '../../../../../Global/PrixActuelleGlobale'
import SitutationFinancierMoisFilter from './SitutationFinancierMoisFilter'
import { Paper} from '@mui/material'
import { styled } from '@mui/material/styles';
import SitutationFinancierAnneeFilter from './SitutationFinancierAnneeFilter'
export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? "#2c2c2c" : "#FFF",
  border: theme.palette.mode === 'dark' ? "rgb(88, 88, 88) solid 3px":'#FFF solid 3px', boxShadow:"0px 1px 8px 1px rgb(125, 125, 125)",
  ...theme.typography.body2 , marginBottom: theme.spacing(1), textAlign: 'center', color: theme.palette.text.secondary,
} ));
export default function SituationFinanciere() {

  return (
    <div style={{display:"grid", gridTemplateColumns:"59% 39%", gap:"2%"}}>
        <div>
          <Item><PrixActuelleGlobale/></Item>
          <Item><SitutationFinancierMoisFilter/></Item>           
        </div>
        <div>
          <Item><SitutationFinancierAnneeFilter/></Item>
        </div>
    </div>
  )
}
