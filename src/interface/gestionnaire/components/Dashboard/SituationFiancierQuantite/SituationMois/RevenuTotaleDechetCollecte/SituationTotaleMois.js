import React from 'react'
import ChartSituation from  '../ChartSituation'
const SituationTotaleMois = () => {
  return (
    <ChartSituation url='http://127.0.0.1:8000/api/revenu-totale-mois' 
      title='Revenus Totale des déchets collectés dans tous les établissements par mois en Dinars'/>  
  );
}
export default SituationTotaleMois;
      