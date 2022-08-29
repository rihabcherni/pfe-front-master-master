import React from 'react'
import { Route, Routes ,Navigate} from 'react-router-dom';
import InterfaceResponsableEtablissement from '../interface/responsable-etablissements/InterfaceResponsableEtablissement';
import Page401 from '../Global/error-pages/Page401';
import Page404 from '../Global/error-pages/Page404';
import InterfaceInternaute from '../interface/internaute/InterfaceInternaute';
import ProfileUpdate from '../Global/AuthPage/ProfileUpdate';

import HistoriqueViderPoubelleResponsable from '../interface/responsable-etablissements/pages/HistoriqueViderPoubelleResponsable';
import AddResponsable from '../interface/responsable-etablissements/pages/AddResponsable';
import Planning from '../interface/responsable-etablissements/pages/Planning';
import DashboardResponsable from '../interface/responsable-etablissements/pages/DashboardResponsable';
import MapResponsable from '../interface/responsable-etablissements/pages/MapResponsable';
import PannePoubelleEtablissement from '../interface/responsable-etablissements/pages/PannePoubelleEtablissement';
import PoubelleEtablissement from '../interface/responsable-etablissements/pages/PoubelleEtablissement';
import ModifierMotDePasse from '../Global/AuthPage/ModifierMotDePasse';

export default function LinkResponsableEtablissement() {
  return (
    <Routes>
        <Route path='/' element={<div><InterfaceInternaute/></div>}></Route>
        <Route path='/login' element={<Navigate to="/responsable-etablissement"/>}></Route>
        <Route path='/responsable-etablissement' element={<InterfaceResponsableEtablissement/>}>	
            <Route index element={<Planning/>}/>
            <Route path='dashboard' element={<DashboardResponsable/>}/>
            <Route path='modifier-mot-de-passe' element={<ModifierMotDePasse/>}/>
            <Route path='map' element={<MapResponsable/>}/>
            <Route path='poubelle' element={<PoubelleEtablissement/>}/>
            <Route path='panne-poubelle' element={<PannePoubelleEtablissement/>}/>
            <Route path='profile' element={<ProfileUpdate/>}/>		
            <Route path='historique-vidage-poubelle' element={<HistoriqueViderPoubelleResponsable/>}/>	
            <Route path='ajouter-responsable' element={<AddResponsable/>}/>		

        </Route>
        <Route path='/gestionnaire' element={<Page401/>}>
            <Route index element={<Page401/>}/>	
            <Route path='modifier-mot-de-passe' element={<Page401/>}/>
            <Route path='map' element={<Page401/>}/>
            <Route path='poubelles' element={<Page401/>}/>
            <Route path='camions' element={<Page401/>}/>
            <Route path='personnel/ouvriers' element={<Page401/>}/>
            <Route path='personnel/reparateurs-poubelle' element={<Page401/>}/>		
            <Route path='personnel/reparateurs-camion' element={<Page401/>}/>
            <Route path='clients/responsables-etablissements' element={<Page401/>}/>
            <Route path='clients/acheteurs-dechets' element={<Page401/>}/>
            <Route path='production/fournisseurs' element={<Page401/>}/>
            <Route path='production/stock-poubelles' element={<Page401/>}/>
            <Route path='production/materiaux-primaires' element={<Page401/>}/>
            <Route path='historique-vidage-poubelle' element={<Page401/>}/>			

            <Route path='commandes-dechets' element={<Page401/>}/>

            <Route path='pannes-poubelles' element={<Page401/>}/>
            <Route path='pannes-camions' element={<Page401/>}/>

            <Route path='calendrier' element={<Page401/>}/>
            <Route path='liste-gestionnaire' element={<Page401/>}/>
            <Route path='contact-us' element={<Page401/>}/>
            <Route path='profile' element={<Page401/>}/>				
        </Route>	
        <Route path='/client-dechets' element={<Page401/>}>
            <Route index element={<Page401/>}/>
            <Route path='reclamation' element={<Page401/>}/>				
            <Route path='panier' element={<Page401/>}/>
            <Route path='achat-dechets' element={<Page401/>}/>
            <Route path='historique-client-dechets' element={<Page401/>}/>
            <Route path='profile' element={<Page401/>}/>			
        </Route>
        <Route path='/responsable-commerciale' element={<Page401/>}>	
            <Route index element={<Page401/>}/>
            <Route path='profile' element={<Page401/>}/>	
        </Route>
        <Route path='/responsable-personnel' element={<Page401/>}>	
            <Route index element={<Page401/>}/>
            <Route path='profile' element={<Page401/>}/>	
        </Route>
        <Route path='*' element={<Page404/>}/>	   	
    </Routes>
  )
}

