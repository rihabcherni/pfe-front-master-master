import React from "react";
import { ImStatsDots } from "react-icons/im";
import { RiShoppingBasketFill } from "react-icons/ri"
import { FaMapMarkedAlt, FaTruckMoving, FaRecycle, FaTrash, FaUser, FaUserTie} from "react-icons/fa";
import { BsFillCalendarDateFill, BsTrashFill, BsTools} from "react-icons/bs";
import { VscTrash } from "react-icons/vsc";
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import { HiUsers } from 'react-icons/hi'
import { MdReportProblem } from "react-icons/md"

export const LinkResponsableTechnique = [
  {id: 1, name: "Dashboard",  path:"/responsable-technique", icon: <ImStatsDots/>, size:"meduim"},
 
  {id: 2, name: "Personnel", icon: <HiUsers/>,
  items: [
    {id:1,name: "Réparateurs poubelle", path:"/responsable-technique/reparateurs-poubelles", icon: <BsTools/>, size:"meduim"},
    {id:2,name: "Mecaniciens camion", path:"/responsable-technique/mecanicien", icon: <BsTools/>, size:"meduim"},
  ], size:"meduim"},
 
  {id: 3, name: "Pannes", icon: <MdReportProblem/>,
    items: [
      { id: 1,name: "Pannes Poubelles", path:"/responsable-technique/pannes-poubelles", icon: <VscTrash/>, size:"meduim"},
      { id: 2,name: "Pannes Camions", path:"/responsable-technique/pannes-camions", icon: <FaRecycle/>, size:"meduim"},
  ], size:"meduim"},
  {id: 4, name: "Poubelle",  path:"/responsable-technique/poubelles", icon: <FaTrash/>, size:"meduim"},
  {id: 5, name: "Camion",  path:"/responsable-technique/camions", icon: <FaTruckMoving/>, size:"meduim"},
 ];