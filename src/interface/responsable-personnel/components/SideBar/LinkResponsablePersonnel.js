import React from "react";
import { HiUsers } from 'react-icons/hi'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { ImStatsDots } from "react-icons/im";
import { FaMapMarkedAlt, FaTruckMoving, FaRecycle, FaTrash, FaUser, FaUserTie, FaBuilding} from "react-icons/fa";
import { BsFillCalendarDateFill, BsTrashFill, BsTools} from "react-icons/bs";
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import CamionOuvrier from '../../../../Global/images/camion-ouvrier.svg'
export const LinkResponsablePersonnel = [
  {id: 1, name: "Dashboard",path:"/responsable-personnel", icon: <ImStatsDots/>},
  {id: 2, name: "Map",path:"/responsable-personnel/map", icon: <FaMapMarkedAlt/>},
  {id: 3, name: "Personnel", icon: <HiUsers/>,
    items: [
      {id:1, name: "Gestionnaire",path:"/responsable-personnel/personnel/liste-gestionnaire", icon: <AdminPanelSettingsIcon/>, size:"meduim"},
      {id:2,name: "Responsables personnels", path:"/responsable-personnel/personnel/responsable-personnel", icon: <AdminPanelSettingsIcon/>, size:"meduim"},
      {id:3,name: "Responsables commerciale", path:"/responsable-personnel/personnel/responsable-commerciale", icon: <AdminPanelSettingsIcon/>, size:"meduim"},
      {id:4,name: "Ouvriers", path:"/responsable-personnel/personnel/ouvriers", icon: <HiUsers/>, size:"meduim"},
      {id:5,name: "Réparateurs poubelle", path:"/responsable-personnel/personnel/reparateurs-poubelle", icon: <BsTools/>, size:"meduim"},
      {id:6,name: "Mecaniciens camion", path:"/responsable-personnel/personnel/mecaniciens-camion", icon: <BsTools/>, size:"meduim"},
    ], size:"meduim"}, 
  {id: 4, name:"Camion",path:"/responsable-personnel/camion", icon: <FaTruckMoving/>, size:"meduim"},
  {id: 5, name:"Ouvriers <=> Camions",path:"/responsable-personnel/affectation-ouvriers-camions", icon: <><HiUsers/> <FaTruckMoving/></>, size:"small"}, 
  {id: 6, name:"Camions <=> établissements",path:"/responsable-personnel/affectation-camions-etablissements", icon: <><FaBuilding/> <FaTruckMoving/></>, size:"small"}, 
];