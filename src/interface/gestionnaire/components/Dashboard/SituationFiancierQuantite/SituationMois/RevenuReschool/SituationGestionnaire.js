import React from 'react'
import ChartSituation from  '../ChartSituation'
const SituationGestionnaire = () => {
  return (
    <ChartSituation url={process.env.REACT_APP_API_KEY+"/api/revenu-reschool-mois"} 
      title='Nos revenus totale des déchets collectés dans tous les établissements par mois en Dinars'/>  
  );
}
export default SituationGestionnaire;