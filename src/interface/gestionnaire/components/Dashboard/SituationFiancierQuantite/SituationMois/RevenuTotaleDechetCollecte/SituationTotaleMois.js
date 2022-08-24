import React from 'react'
import ChartSituation from  '../ChartSituation'
const SituationTotaleMois = () => {
  return (
    <ChartSituation url={process.env.REACT_APP_API_KEY+"/api/revenu-totale-mois"}
      title='Revenus Totale des déchets collectés dans tous les établissements par mois en Dinars'/>  
  );
}
export default SituationTotaleMois;
      