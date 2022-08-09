import React from 'react'
import ChartSituation from  '../ChartSituation'
const SituationGestionnaire = () => {
  return (
    <ChartSituation url='http://127.0.0.1:8000/api/revenu-reschool-mois' 
      title='Nos revenus totale des déchets collectés dans tous les établissements par mois en Dinars'/>  
  );
}
export default SituationGestionnaire;