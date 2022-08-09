import React from 'react';
import { Route, Routes ,Navigate} from 'react-router-dom';
import axios from 'axios';
import './App.css';
/**** ---------------------internaute ------------------------ ****/
import InterfaceInternaute from './interface/internaute/InterfaceInternaute';
/**** ---------------------gestionnaire ------------------------ ****/
import InterfaceGestionnaire from './interface/gestionnaire/InterfaceGestionnaire';
import Dashboard from './interface/gestionnaire/pages/Dashboard';
import MapGestionnaire from './interface/gestionnaire/pages/map/MapGestionnaire';
import Poubelles from './interface/gestionnaire/pages/GestionPoubelleEtablissement/Poubelles';
import Camion from './interface/gestionnaire/pages/TransportDechet/Camion';
import Ouvrier from './interface/gestionnaire/pages/personnel/Ouvrier';
import ReparateurPoubelle from './interface/gestionnaire/pages/personnel/ReparateurPoubelle';
import ReparateurCamion from './interface/gestionnaire/pages/personnel/ReparateurCamion';
import ResponsableEtablissement from './interface/gestionnaire/pages/clients/ResponsableEtablissement';
import ClientDechet from './interface/gestionnaire/pages/clients/ClientDechet';
import Fournisseur from './interface/gestionnaire/pages/productionPoubelle/Fournisseur';
import CommandeDechets from './interface/gestionnaire/pages/commande/CommandeDechets';
import CalendrierGestionnaire from './interface/gestionnaire/pages/CalendrierGestionnaire';
import ModiferMotDePasse from './interface/gestionnaire/pages/ModiferMotDePasse';
import ContactUs from './interface/gestionnaire/pages/ContactUs/ContactUs';
import HistoriqueViderPoubelleGlobale from './interface/gestionnaire/pages/HistoriqueViderPoubelleGlobale';

/**** ----------------------responsable Etablissement ------------------------ ****/
import InterfaceResponsableEtablissement from './interface/responsable-etablissements/InterfaceResponsableEtablissement';

import DashboardResponsable from './interface/responsable-etablissements/pages/DashboardResponsable';
import MapResponsable from './interface/responsable-etablissements/pages/MapResponsable';
import PannePoubelleEtablissement from './interface/responsable-etablissements/pages/PannePoubelleEtablissement';
import PoubelleEtablissement from './interface/responsable-etablissements/pages/PoubelleEtablissement';
import StockPoubelle from './interface/gestionnaire/pages/productionPoubelle/StockPoubelle';
import MateriauxPrimaire from './interface/gestionnaire/pages/productionPoubelle/MateriauxPrimaire';
/**** ----------------------responsable Etablissement ------------------------ ****/
import PannePoubelle from './interface/gestionnaire/pages/pannes/PannePoubelle';
import PanneCamion from './interface/gestionnaire/pages/pannes/PanneCamion';
import Gestionnaire from './interface/gestionnaire/pages/Gestionnaire';
import Page404 from './Global/error-pages/Page404';
import Page401 from './Global/error-pages/Page401';
/**** ---------------------client dechet ------------------------ ****/
import DashboardClientDechet from './interface/client-dechet/pages/DashboardClientDechet';
import InterfaceClientDechet from './interface/client-dechet/InterfaceClientDechet';
import ReclamationClientDechets from './interface/client-dechet/pages/ReclamationClientDechets';
import PanierClientDechets from './interface/client-dechet/pages/PanierClientDechets';
import Historique from './interface/client-dechet/pages/Historique';
import Achat from './interface/client-dechet/pages/Achat';
import Login from './Global/AuthPage/Login';
import ProfileUpdate from './Global/AuthPage/ProfileUpdate';
import HistoriqueViderPoubelleResponsable from './interface/responsable-etablissements/pages/HistoriqueViderPoubelleResponsable';
import AddResponsable from './interface/responsable-etablissements/pages/AddResponsable';
import Planning from './interface/responsable-etablissements/pages/Planning';

axios.defaults.baseURL= "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-type']="application/json";
axios.defaults.headers.post['Accept']="application/json";

const AppRoutes=()=> {
	if("auth_token" in localStorage){
		if(localStorage.getItem("Role")=== "gestionnaire"){
		   return <>
		   			<Routes>
		  			    <Route path='/' element={<div><InterfaceInternaute/></div>}></Route>
						<Route path='/login' element={<Navigate to="/gestionnaire"/>}></Route>
						<Route path='/gestionnaire' element={<InterfaceGestionnaire/>}>
							<Route index element={<Dashboard/>}/>	
							<Route path='modifier-mot-de-passe' element={<ModiferMotDePasse/>}/>
							<Route path='map' element={<MapGestionnaire/>}/>
							<Route path='poubelles' element={<Poubelles/>}/>
							<Route path='camions' element={<Camion/>}/>
							<Route path='personnel/ouvriers' element={<Ouvrier/>}/>
							<Route path='personnel/reparateurs-poubelle' element={<ReparateurPoubelle/>}/>		
							<Route path='personnel/reparateurs-camion' element={<ReparateurCamion/>}/>
							<Route path='clients/responsables-etablissements' element={<ResponsableEtablissement/>}/>
							<Route path='clients/acheteurs-dechets' element={<ClientDechet/>}/>
							<Route path='production/fournisseurs' element={<Fournisseur/>}/>
							<Route path='production/stock-poubelles' element={<StockPoubelle/>}/>
							<Route path='production/materiaux-primaires' element={<MateriauxPrimaire/>}/>
							<Route path='historique-vidage-poubelle' element={<HistoriqueViderPoubelleGlobale/>}/>			

							<Route path='commandes-dechets' element={<CommandeDechets/>}/>
						
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
						<Route path='*' element={<Page404/>}/>
					</Routes>	
				  </>
		}
		if(localStorage.getItem("Role")=== "responsable_etablissement"){
			return	<>
						<Routes>
							<Route path='/' element={<div><InterfaceInternaute/></div>}></Route>
							<Route path='/login' element={<Navigate to="/responsable-etablissement"/>}></Route>
							<Route path='/responsable-etablissement' element={<InterfaceResponsableEtablissement/>}>	
								<Route index element={<Planning/>}/>
								<Route path='dashboard' element={<DashboardResponsable/>}/>
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
							<Route path='*' element={<Page404/>}/>	   	
						</Routes>
					</>		   	
		}
		if(localStorage.getItem("Role")=== "client_dechet"){
			return	<Routes>
			            <Route path='/' element={<div><InterfaceInternaute/></div>}></Route>
						<Route path='/login' element={<Navigate to="/client-dechets"/>}></Route>
						<Route path='/client-dechets' element={<InterfaceClientDechet/>}>
							<Route index element={<DashboardClientDechet/>}/>
							<Route path='reclamation' element={<ReclamationClientDechets/>}/>				
							<Route path='panier' element={<PanierClientDechets/>}/>
							<Route path='achat-dechets' element={<Achat/>}/>
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
						<Route path='*' element={<div><Navigate replace to="/page-404" /><Page404/> </div>}/>		   	
					</Routes>		   	
		}
	}
	if (!("auth_token" in localStorage)) {
	   return 	<Routes>
					<Route path='/' element={<div><InterfaceInternaute/></div>}></Route>
					<Route path='/login' element={<div><Login/></div>}></Route>
					<Route path='*' element={<div><Navigate replace to="/page-404" /><Page404/> </div>}/>
				</Routes>
	}	
	else return null
}
function App() {
	return (  <AppRoutes/> );
}
export default App;

