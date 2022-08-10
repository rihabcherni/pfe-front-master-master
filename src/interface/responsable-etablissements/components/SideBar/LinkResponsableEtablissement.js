import React from "react";
import { ImStatsDots } from "react-icons/im";
import { BsFillCalendarDateFill, BsTrashFill, BsTools} from "react-icons/bs";
import { FaMapMarkedAlt, FaUserTie} from "react-icons/fa";
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
export const LinkResponsableEtablissement = [
  {id: 1, name: "Planning",path:"/responsable-etablissement", icon: <BsFillCalendarDateFill/>, size:"meduim"},
  {id: 2, name: "Dashboard",path:"/responsable-etablissement/dashboard", icon: <ImStatsDots/>, size:"meduim"},
  {id: 3, name: "Map",path:"/responsable-etablissement/map", icon: <FaMapMarkedAlt/>, size:"meduim"},
  {id: 4, name: "Poubelles",path:"/responsable-etablissement/poubelle", icon: <BsTrashFill/>, size:"meduim"},
  {id: 5, name: "Historique vidage poubelles",path:"/responsable-etablissement/historique-vidage-poubelle", icon: <AutoDeleteIcon/>, size:"meduim"},
  {id: 6, name: "Pannes Poubelles",path:"/responsable-etablissement/panne-poubelle", icon: <BsTools/>, size:"meduim"},
  {id: 7, name: "Ajouter responsable",path:"/responsable-etablissement/ajouter-responsable", icon: <FaUserTie/>, size:"meduim"},
];