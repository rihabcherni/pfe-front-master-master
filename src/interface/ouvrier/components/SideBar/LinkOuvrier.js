import React from "react";
import { ImStatsDots } from "react-icons/im";
import { FaMapMarkedAlt, FaTruckMoving, FaTrashRestoreAlt, FaTrash,FaSchool} from "react-icons/fa";
import { BsFillCalendarDateFill} from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
export const LinkOuvrier = [
  {id: 1, name: "Planning",  path:"/ouvrier", icon: <BsFillCalendarDateFill/>, size:"meduim"},
  {id: 2, name: "Dashboard",  path:"/ouvrier/dashboard", icon: <ImStatsDots/>, size:"meduim"},
  {id: 3, name: "Map",  path:"/ouvrier/map", icon: <FaMapMarkedAlt/>, size:"meduim"},
  {id: 4, name: "Détails camion",  path:"/ouvrier/details-camion", icon: <FaTruckMoving/>, size:"meduim"},
  {id: 5, name: "Liste établissement",  path:"/ouvrier/liste-etablissement", icon: <FaSchool/>, size:"meduim"},
  {id: 6, name: "Poubelle",  path:"/ouvrier/poubelles", icon: <FaTrash/>, size:"meduim"},
  {id: 7, name: "Vider Poubelle",  path:"/ouvrier/vider-poubelle", icon: <FaTrashRestoreAlt/>, size:"meduim"},
  {id: 8, name: "Détails zone depot",  path:"/ouvrier/details-zone-depot", icon: <HiLocationMarker/>, size:"meduim"},
 ];