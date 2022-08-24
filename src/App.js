import React from 'react';
import { Route, Routes ,Navigate} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import InterfaceInternaute from './interface/internaute/InterfaceInternaute';
import Page404 from './Global/error-pages/Page404';
import Login from './Global/AuthPage/Login';

import ListeGestionnaireLink from './Link/LinkGestionnaire'
import LinkResponsableEtablissement from './Link/LinkResponsableEtablissement';
import LinkClientDechet from './Link/LinkClientDechet';
import LinkResponsableCommerciale from './Link/LinkResponsableCommerciale';
import ListeLinkResponsablePersonnel  from './Link/ListeLinkResponsablePersonnel';

axios.defaults.baseURL= `${process.env.REACT_APP_API_KEY}/`;
axios.defaults.headers.post['Content-type']="application/json";
axios.defaults.headers.post['Accept']="application/json";

const AppRoutes=()=> {
	if("auth_token" in localStorage){
		if(localStorage.getItem("Role")=== "gestionnaire"){
		    return <ListeGestionnaireLink/>	  
		}
		if(localStorage.getItem("Role")=== "responsable_etablissement"){
			return	<LinkResponsableEtablissement/>
			   	
		}
		if(localStorage.getItem("Role")=== "client_dechet"){
			return	<LinkClientDechet/>	   	
		}


		if(localStorage.getItem("Role")=== "responsable_commerciale"){
			return	<LinkResponsableCommerciale/>	   	
		}

		if(localStorage.getItem("Role")=== "responsable_personnel"){
			return	<ListeLinkResponsablePersonnel/>	   	
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

