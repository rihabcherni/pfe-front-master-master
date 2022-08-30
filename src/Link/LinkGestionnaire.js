import React from 'react'
import { Route, Routes ,Navigate} from 'react-router-dom';
/**** ---------------------gestionnaire ------------------------ ****/
import StockPoubelle from '../interface/gestionnaire/pages/productionPoubelle/StockPoubelle';
import MateriauxPrimaire from '../interface/gestionnaire/pages/productionPoubelle/MateriauxPrimaire';
import InterfaceGestionnaire from '../interface/gestionnaire/InterfaceGestionnaire';
import Dashboard from '../interface/gestionnaire/pages/Dashboard';
import MapGestionnaire from '../interface/gestionnaire/pages/map/MapGestionnaire';
import Poubelles from '../interface/gestionnaire/pages/GestionPoubelleEtablissement/Poubelles';
import Camion from '../interface/gestionnaire/pages/TransportDechet/Camion';
import Ouvrier from '../interface/gestionnaire/pages/personnel/Ouvrier';
import ResponsableCommercial from '../interface/gestionnaire/pages/personnel/ResponsableCommercial';
import ResponsablePersonnel from '../interface/gestionnaire/pages/personnel/ResponsablePersonnel';
import ReparateurPoubelle from '../interface/gestionnaire/pages/personnel/ReparateurPoubelle';
import ReparateurCamion from '../interface/gestionnaire/pages/personnel/ReparateurCamion';
import ResponsableEtablissement from '../interface/gestionnaire/pages/clients/ResponsableEtablissement';
import ClientDechet from '../interface/gestionnaire/pages/clients/ClientDechet';
import Fournisseur from '../interface/gestionnaire/pages/productionPoubelle/Fournisseur';
import CommandeDechets from '../interface/gestionnaire/pages/commande/CommandeDechets';
import Dechets from '../interface/gestionnaire/pages/commande/Dechets';
import CalendrierGestionnaire from '../interface/gestionnaire/pages/CalendrierGestionnaire';
import ModifierMotDePasse from '../Global/AuthPage/ModifierMotDePasse';
import ContactUs from '../interface/gestionnaire/pages/ContactUs/ContactUs';
import HistoriqueViderPoubelleGlobale from '../interface/gestionnaire/pages/HistoriqueViderPoubelleGlobale';
/**** ----------------------responsable Etablissement ------------------------ ****/
import PannePoubelle from '../interface/gestionnaire/pages/pannes/PannePoubelle';
import PanneCamion from '../interface/gestionnaire/pages/pannes/PanneCamion';
import Gestionnaire from '../interface/gestionnaire/pages/Gestionnaire';
import Page404 from '../Global/error-pages/Page404';
import Page401 from '../Global/error-pages/Page401';
import InterfaceInternaute from '../interface/internaute/InterfaceInternaute';
import ProfileUpdate from '../Global/AuthPage/ProfileUpdate';
export default function LinkGestionnaire() {
  return (
    <Routes>
		  <Route path='/' element={<div><InterfaceInternaute/></div>}></Route>
    	<Route path='/login' element={<Navigate to="/gestionnaire"/>}></Route>
      <Route path='/gestionnaire' element={<InterfaceGestionnaire/>}>
            <Route index element={<Dashboard/>}/>	
            <Route path='modifier-mot-de-passe' element={<ModifierMotDePasse/>}/>
            <Route path='map' element={<MapGestionnaire/>}/>
            <Route path='poubelles' element={<Poubelles/>}/>
            <Route path='camions' element={<Camion/>}/>
            <Route path='personnel/ouvriers' element={<Ouvrier/>}/>
            <Route path='personnel/responsable-commerciale' element={<ResponsableCommercial/>}/>
            <Route path='personnel/responsable-personnel' element={<ResponsablePersonnel/>}/>

            
            <Route path='personnel/reparateurs-poubelle' element={<ReparateurPoubelle/>}/>		
            <Route path='personnel/reparateurs-camion' element={<ReparateurCamion/>}/>
            <Route path='clients/responsables-etablissements' element={<ResponsableEtablissement/>}/>
            <Route path='clients/acheteurs-dechets' element={<ClientDechet/>}/>
            <Route path='production/fournisseurs' element={<Fournisseur/>}/>
            <Route path='production/stock-poubelles' element={<StockPoubelle/>}/>
            <Route path='production/materiaux-primaires' element={<MateriauxPrimaire/>}/>
            <Route path='historique-vidage-poubelle' element={<HistoriqueViderPoubelleGlobale/>}/>			

            <Route path='commandes-dechets' element={<CommandeDechets/>}/>
            <Route path='dechets' element={<Dechets/>}/>
                            
            <Route path='pannes-poubelles' element={<PannePoubelle/>}/>
            <Route path='pannes-camions' element={<PanneCamion/>}/>
                            
            <Route path='calendrier' element={<CalendrierGestionnaire/>}/>
            <Route path='liste-gestionnaire' element={<Gestionnaire/>}/>
            <Route path='contact-us' element={<ContactUs/>}/>
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

