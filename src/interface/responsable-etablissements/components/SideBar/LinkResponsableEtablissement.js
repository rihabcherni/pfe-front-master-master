import React from "react";
import { ImStatsDots } from "react-icons/im";
import { BsFillCalendarDateFill, BsTrashFill, BsTools} from "react-icons/bs";
import { FaMapMarkedAlt, FaUserTie} from "react-icons/fa";
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
export const LinkResponsableEtablissement = [
  {id: 1, name: "Planning",path:"/responsable-etablissement", icon: <BsFillCalendarDateFill/>},
  {id: 2, name: "Dashboard",path:"/responsable-etablissement/dashboard", icon: <ImStatsDots/>},
  {id: 3, name: "Map",path:"/responsable-etablissement/map", icon: <FaMapMarkedAlt/>},
  {id: 4, name: "Poubelles",path:"/responsable-etablissement/poubelle", icon: <BsTrashFill/>},
  {id: 5, name: "Historique vidage poubelles",path:"/responsable-etablissement/historique-vidage-poubelle", icon: <AutoDeleteIcon/>},
  {id: 6, name: "Pannes Poubelles",path:"/responsable-etablissement/panne-poubelle", icon: <BsTools/>},
  {id: 7, name: "Ajouter responsable",path:"/responsable-etablissement/ajouter-responsable", icon: <FaUserTie/>},
];