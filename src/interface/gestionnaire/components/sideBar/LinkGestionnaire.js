import React from "react";
import { BsFillCalendarDateFill, BsTrashFill, BsTools } from "react-icons/bs";
import { HiUsers } from 'react-icons/hi'
import { ImUserTie, ImStatsDots } from "react-icons/im";
import { VscTrash } from "react-icons/vsc";
import { FaMapMarkedAlt, FaTruckMoving, FaRecycle, FaTrash, FaUser, FaUserTie} from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri"
import { MdReportProblem } from "react-icons/md"
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ContactsIcon from '@mui/icons-material/Contacts';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';

export const linkDetailsGestionnaire = [
    {id: 1, name: "Dashboard",  path:"/gestionnaire", icon: <ImStatsDots/>, size:"meduim"},
    {id: 2, name: "Map",  path:"/gestionnaire/map", icon: <FaMapMarkedAlt/>, size:"meduim"},

    {id: 3, name: "Gestion poubelles", path:"/gestionnaire/poubelles", icon: <BsTrashFill/>, size:"meduim"},
    {id: 4, name: "Historique vidage poubelles",path:"/gestionnaire/historique-vidage-poubelle", icon: <AutoDeleteIcon/>, size:"meduim"},
    {id: 5, name: "Gestion camions", path:"/gestionnaire/camions", icon: <FaTruckMoving/>, size:"meduim"},
   
    {id: 6, name: "Production poubelle", icon: <FaTrash color="primary"/>,
      items: [
        {id: 1, name: "Fournisseurs", path:"/gestionnaire/production/fournisseurs", icon: <FaUserTie/>, size:"meduim"},
        {id: 2,name: "Stock poubelles", path:"/gestionnaire/production/stock-poubelles", icon: <VscTrash/>, size:"meduim"},
        {id: 3,name: "Materiaux primaires", path:"/gestionnaire/production/materiaux-primaires", icon: <BsTools/>, size:"meduim"},
      ], size:"meduim"},
    {id: 7, name: "Personnel", icon: <HiUsers/>,
      items: [
        {id:1, name: "Gestionnaire",path:"/gestionnaire/liste-gestionnaire", icon: <AdminPanelSettingsIcon/>, size:"meduim"},
        {id:1, name: "Responsable Commerciale",path:"/gestionnaire/personnel/responsable-commerciale", icon: <AdminPanelSettingsIcon/>, size:"meduim"},
        {id:1, name: "Responsable Personnel",path:"/gestionnaire/personnel/responsable-personnel", icon: <AdminPanelSettingsIcon/>, size:"meduim"},
        {id:2,name: "Ouvriers", path:"/gestionnaire/personnel/ouvriers", icon: <HiUsers/>, size:"meduim"},
        {id:3,name: "Réparateurs poubelle", path:"/gestionnaire/personnel/reparateurs-poubelle", icon: <BsTools/>, size:"meduim"},
        {id:4,name: "Mecaniciens camion", path:"/gestionnaire/personnel/reparateurs-camion", icon: <BsTools/>, size:"meduim"},
      ], size:"meduim"},
    {id: 8, name: "Clients", icon: <FaUser/>,
    items: [
      {id: 1,name: "Responsables Etablissement", path:"/gestionnaire/clients/responsables-etablissements", icon: <FaUser/>, size:"meduim"},
      {id: 2,name: "Acheteurs de déchets", path:"/gestionnaire/clients/acheteurs-dechets", icon: <FaRecycle/>, size:"meduim"},
    ]
    , size:"meduim"},
    { id:9 ,name: "Déchets", path:"/gestionnaire/dechets", icon: <RiShoppingBasketFill/>, size:"meduim"},
    { id:9 ,name: "Commandes Déchets", path:"/gestionnaire/commandes-dechets", icon: <RiShoppingBasketFill/>, size:"meduim"},
    {id: 10, name: "Pannes", icon: <MdReportProblem/>,
    items: [
      { id: 1,name: "Pannes Poubelles", path:"/gestionnaire/pannes-poubelles", icon: <VscTrash/>, size:"meduim"},
      { id: 2,name: "Pannes Camions", path:"/gestionnaire/pannes-camions", icon: <FaRecycle/>, size:"meduim"},
    ]
    , size:"meduim"},
    {id:11, name: "Calendrier",path:"/gestionnaire/calendrier", icon: <BsFillCalendarDateFill/>, size:"meduim"},
    {id:12, name: "Contact-us",path:"/gestionnaire/contact-us", icon: <ContactsIcon/>, size:"meduim"},
  ];