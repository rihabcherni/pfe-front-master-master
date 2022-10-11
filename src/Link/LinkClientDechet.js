import React from 'react'
import { Route, Routes ,Navigate} from 'react-router-dom';
import Page404 from '../Global/error-pages/Page404';
import Page401 from '../Global/error-pages/Page401';
import InterfaceInternaute from '../interface/internaute/InterfaceInternaute';
import ProfileUpdate from '../Global/AuthPage/ProfileUpdate';
import DashboardClientDechet from '../interface/client-dechet/pages/DashboardClientDechet';
import InterfaceClientDechet from '../interface/client-dechet/InterfaceClientDechet';
import ReclamationClientDechets from '../interface/client-dechet/pages/ReclamationClientDechets';
import PanierClientDechets from '../interface/client-dechet/pages/PanierClientDechets';
import Historique from '../interface/client-dechet/pages/Historique';
import ModifierMotDePasse from '../Global/AuthPage/ModifierMotDePasse';
import ProduitDechet from '../interface/client-dechet/pages/ProduitDechet';

export default function LinkClientDechet() {
  return (
    <Routes>
        <Route path='/' element={<div><InterfaceInternaute/></div>}></Route>
        <Route path='/login' element={<Navigate to="/client-dechets"/>}></Route>
        <Route path='/client-dechets' element={<InterfaceClientDechet/>}>
            <Route index element={<DashboardClientDechet/>}/>
            <Route path='modifier-mot-de-passe' element={<ModifierMotDePasse/>}/>
            <Route path='reclamation' element={<ReclamationClientDechets/>}/>				
            <Route path='panier' element={<PanierClientDechets/>}/>
            <Route path='produitsdechets' element={<ProduitDechet/>}/>
            <Route path='historique-client-dechets' element={<Historique/>}/>
            <Route path='profile' element={<ProfileUpdate/>}/>			
        </Route>
        <Route path='/responsable-etablissement' element={<Page401/>}>	
            <Route index element={<Page401/>}/>
            <Route path='dashboard' element={<Page401/>}/>
            <Route path='map' element={<Page401/>}/>
            <Route path='poubelle' element={<Page401/>}/>
            <Route path='panne-poubelle' element={<Page401/>}/>
            <Route path='profile' element={<Page401/>}/>	
            <Route path='historique-vidage-poubelle' element={<Page401/>}/>		
            <Route path='ajouter-responsable' element={<Page401/>}/>				
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
            <Route path='commandes-dechets' element={<Page401/>}/>
            <Route path='pannes-poubelles' element={<Page401/>}/>
            <Route path='pannes-camions' element={<Page401/>}/>
            <Route path='calendrier' element={<Page401/>}/>
            <Route path='liste-gestionnaire' element={<Page401/>}/>
            <Route path='contact-us' element={<Page401/>}/>
            <Route path='profile' element={<Page401/>}/>	
            <Route path='historique-vidage-poubelle' element={<Page401/>}/>						
        </Route>
        <Route path='/responsable-commerciale' element={<Page401/>}>	
            <Route index element={<Page401/>}/>
            <Route path='profile' element={<Page401/>}/>	
        </Route>
        <Route path='/responsable-personnel' element={<Page401/>}>	
            <Route index element={<Page401/>}/>
            <Route path='profile' element={<Page401/>}/>	
        </Route>
        <Route path='/responsable-technique' element={<Page401/>}>	
            <Route index element={<Page401/>}/>
            <Route path='modifier-mot-de-passe' element={<Page401/>}/>
            <Route path='profile' element={<Page401/>}/>	
        </Route>
        <Route path='/reparateur-poubelle' element={<Page401/>}>	
            <Route index element={<Page401/>}/>
            <Route path='modifier-mot-de-passe' element={<Page401/>}/>
            <Route path='profile' element={<Page401/>}/>	
        </Route>
        <Route path='/mecanicien' element={<Page401/>}>	
            <Route index element={<Page401/>}/>
            <Route path='pannes-camions' element={<Page401/>}/>
            <Route path='modifier-mot-de-passe' element={<Page401/>}/>
            <Route path='profile' element={<Page401/>}/>	
        </Route>
        <Route path='/ouvrier' element={<Page401/>}>	
            <Route index element={<Page401/>}/>
            <Route path='modifier-mot-de-passe' element={<Page401/>}/>
            <Route path='profile' element={<Page401/>}/>	
        </Route>
        <Route path='*' element={<Page404/>}/>
    </Routes>	
  )
}
