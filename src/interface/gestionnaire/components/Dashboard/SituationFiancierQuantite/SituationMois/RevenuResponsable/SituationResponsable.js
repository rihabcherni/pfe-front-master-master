import React from 'react'
import ChartSituation from  '../ChartSituation'
const SituationResponsable = () => {
  return (
    <ChartSituation url={process.env.REACT_APP_API_KEY+"/api/revenu-etab-mois"} 
      title='Part totale des revenus des établissements des déchets collectés par mois en Dinars'/>  
  );
}
export default SituationResponsable;