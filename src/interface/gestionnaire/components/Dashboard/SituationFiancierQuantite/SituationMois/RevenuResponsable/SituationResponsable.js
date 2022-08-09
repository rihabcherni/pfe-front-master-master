import React from 'react'
import ChartSituation from  '../ChartSituation'
const SituationResponsable = () => {
  return (
    <ChartSituation url='http://127.0.0.1:8000/api/revenu-etab-mois' 
      title='Part totale des revenus des établissements des déchets collectés par mois en Dinars'/>  
  );
}
export default SituationResponsable;