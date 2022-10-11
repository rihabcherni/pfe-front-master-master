import React from 'react'
import {Last3CommandeClientUrl} from '../../../../../URLBackend/Client_dechet'
import TableCommandeGlobal from './TableCommandeGlobal';

export default function LastCommandeClient() {
  return (
    <TableCommandeGlobal url={Last3CommandeClientUrl}/>
  )
}