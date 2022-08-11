import React from 'react'
import CommandeDechetTable from '../../../gestionnaire/components/Table/gestionDechets/CommandeDechetTable'
import DetailCommandeDechetTable from '../../../gestionnaire/components/Table/gestionDechets/DetailCommandeDechetTable'
export default function ListeCommandeDechet() {
  return (
    <div>
      <CommandeDechetTable/>
      <DetailCommandeDechetTable/>
    </div>
  )
}
