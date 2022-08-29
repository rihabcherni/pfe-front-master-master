import React from 'react'
import { Route, Routes ,Navigate} from 'react-router-dom';
import Page404 from '../Global/error-pages/Page404';
import Page401 from '../Global/error-pages/Page401';
import InterfaceInternaute from '../interface/internaute/InterfaceInternaute';
import ProfileUpdate from '../Global/AuthPage/ProfileUpdate';
import InterfaceResponsablePersonnel from '../interface/responsable-personnel/InterfaceResponsablePersonnel';
import DashboardResponsablePersonnel from '../interface/responsable-personnel/pages/DashboardResponsablePersonnel';
import AffectationCamionEtablissement from '../interface/responsable-personnel/pages/AffectationCamionEtablissement';
import AffectationCamionOuvrier from '../interface/responsable-personnel/pages/AffectationCamionOuvrier';
import ListeCamion from '../interface/responsable-personnel/pages/ListeCamion';
import ListeGestionnaire from '../interface/responsable-personnel/pages/ListeGestionnaire';
import ListeMecancien from '../interface/responsable-personnel/pages/ListeMecancien';
import ListeOuvrier from '../interface/responsable-personnel/pages/ListeOuvrier';
import ListeReparateurPoubelle from '../interface/responsable-personnel/pages/ListeReparateurPoubelle';
import ListeResponsableCommerciale from '../interface/responsable-personnel/pages/ListeResponsableCommerciale';
import ListeResponsablePersonnel from '../interface/responsable-personnel/pages/ListeResponsablePersonnel';
import MapResponablePersonnel from '../interface/responsable-personnel/pages/MapResponablePersonnel';
import ModifierMotDePasse from '../Global/AuthPage/ModifierMotDePasse';

export default function LinkResponsablePersonnel() {
  return (
    <Routes>
      <Route path='/' element={<div><InterfaceInternaute/></div>}></Route>
      <Route path='/login' element={<Navigate to="/responsable-personnel"/>}></Route>
      <Route path='/responsable-personnel' element={<InterfaceResponsablePersonnel/>}>	
        <Route index element={<DashboardResponsablePersonnel/>}/>
        <Route path='modifier-mot-de-passe' element={<ModifierMotDePasse/>}/>
        <Route path='affectation-camions-etablissements' element={<AffectationCamionEtablissement/>}/>
        <Route path='affectation-ouvriers-camions' element={<AffectationCamionOuvrier/>}/>
        <Route path='camion' element={<ListeCamion/>}/>
        <Route path='personnel/liste-gestionnaire' element={<ListeGestionnaire/>}/>
        <Route path='personnel/mecaniciens-camion' element={<ListeMecancien/>}/>
        <Route path='personnel/ouvriers' element={<ListeOuvrier/>}/>
        <Route path='personnel/reparateurs-poubelle' element={<ListeReparateurPoubelle/>}/>
        <Route path='personnel/responsable-commerciale' element={<ListeResponsableCommerciale/>}/>
        <Route path='personnel/responsable-personnel' element={<ListeResponsablePersonnel/>}/>
        <Route path='map' element={<MapResponablePersonnel/>}/>
        <Route path='profile' element={<ProfileUpdate/>}/>	
      </Route>
      <Route path='/client-dechets' element={<Page401/>}>
        <Route index element={<Page401/>}/>
        <Route path='reclamation' element={<Page401/>}/>				
        <Route path='panier' element={<Page401/>}/>
        <Route path='achat-dechets' element={<Page401/>}/>
        <Route path='historique-client-dechets' element={<Page401/>}/>
        <Route path='profile' element={<Page401/>}/>			
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
      <Route path='*' element={<div><Navigate replace to="/page-404" /><Page404/> </div>}/>		   	
    </Routes>	
  )
}
