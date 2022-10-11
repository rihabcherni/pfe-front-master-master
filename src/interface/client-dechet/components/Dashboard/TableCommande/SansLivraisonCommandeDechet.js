import  React from 'react';
import {SansLivraisonCommandeClientUrl} from '../../../../../URLBackend/Client_dechet'
import TableCommandeGlobal from './TableCommandeGlobal';

export default function SansLivraisonCommandeDechet() {
  return (
    <TableCommandeGlobal url={SansLivraisonCommandeClientUrl}/>
  )
}