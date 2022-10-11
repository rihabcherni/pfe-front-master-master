import  React from 'react';
import {Max3MontantCommandeClientUrl} from '../../../../../URLBackend/Client_dechet'
import TableCommandeGlobal from './TableCommandeGlobal';

export default function MaxMontantCommandeDechet() {
  return (
    <TableCommandeGlobal url={Max3MontantCommandeClientUrl}/>
  )
}