export const baseURL = 'http://127.0.0.1:8000';
// export const baseURL ='https://reschoolecology.tech';

export const apiClientDechet = "/api/auth-client-dechet";
export const HistoriqueCommandeClientUrl = baseURL+ apiClientDechet + '/historique-commande-client';
export const Max3MontantCommandeClientUrl = baseURL+ apiClientDechet + '/max3-montant-commande-client';
export const Last3CommandeClientUrl = baseURL+ apiClientDechet + '/dernier3-commande-client';
export const SansLivraisonCommandeClientUrl = baseURL+ apiClientDechet + '/commande-client-sans-livraison';

export const QuantiteDechetAcheteTotalClientUrl = baseURL+ apiClientDechet + '/quantite-dechet-achete-total-client';

export const SommeDechetTotalReschoolUrl = baseURL+ apiClientDechet + '/somme-total-dechet-reschool';

export const SommeDechetStockActuellelUrl = baseURL+ apiClientDechet + '/stock-dechet-actuelle';

export const QuantiteDechetAcheteMoislUrl = baseURL+ apiClientDechet + '/quantite-dechet-achete-mois';
export const QuantiteDechetAcheteAnneelUrl = baseURL+ apiClientDechet + '/quantite-dechet-achete-annee';


//conversation

const getConversationsURL = baseURL +apiClientDechet + "/getConversations";

const addConversationURL = baseURL +apiClientDechet + "/conversation";

const sendMessageURL = baseURL +apiClientDechet + "/message";

const makeConversationReadURL = baseURL +apiClientDechet + "/conversation/read";

// Dechets

const dechetsURL = baseURL + '/api/dechets';

const commanderURL = baseURL +apiClientDechet + '/panier';

const afficherDechetsClientURL = baseURL +apiClientDechet + '/afficherDechetsClient';

const afficherDetailsDechetURL = baseURL +apiClientDechet + '/afficherDetailsDechet';
