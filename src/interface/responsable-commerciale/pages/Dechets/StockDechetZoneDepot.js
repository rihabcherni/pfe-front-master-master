import React from 'react'
import DepotTable from '../../../gestionnaire/components/Table/transportDechet/DepotTable'
import ZoneDepotsTable from '../../../gestionnaire/components/Table/transportDechet/ZoneDepotsTable'

export default function StockDechetZoneDepot() {
  return (
    <>
      <ZoneDepotsTable/>
      <DepotTable/>
    </>
  )
}
