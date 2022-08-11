import React from "react";
import { ImStatsDots } from "react-icons/im";
import { RiShoppingBasketFill } from "react-icons/ri"
import { FaMapMarkedAlt, FaTruckMoving, FaRecycle, FaTrash, FaUser, FaUserTie} from "react-icons/fa";
import { BsFillCalendarDateFill, BsTrashFill, BsTools} from "react-icons/bs";
import { VscTrash } from "react-icons/vsc";
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
export const LinkResponsableCommerciale = [
  {id: 1, name: "Dashboard",  path:"/responsable-commerciale", icon: <ImStatsDots/>, size:"meduim"},
  {id: 2, name: "Clients", icon: <FaUser/>,
  items: [
    {id: 1,name: "Responsables Etablissement", path:"/responsable-commerciale/clients/responsables-etablissements", icon: <FaUser/>, size:"meduim"},
    {id: 2,name: "Acheteurs de déchets", path:"/responsable-commerciale/clients/acheteurs-dechets", icon: <FaRecycle/>, size:"meduim"},
  ]
  , size:"meduim"},
  {id: 3, name: "Production poubelle", icon: <FaTrash color="primary"/>,
  items: [
    {id: 1, name: "Fournisseurs", path:"/responsable-commerciale/production/fournisseurs", icon: <FaUserTie/>, size:"meduim"},
    {id: 2,name: "Stock poubelles", path:"/responsable-commerciale/production/stock-poubelles", icon: <VscTrash/>, size:"meduim"},
    {id: 3,name: "Materiaux primaires", path:"/responsable-commerciale/production/materiaux-primaires", icon: <BsTools/>, size:"meduim"},
  ], size:"meduim"},

  {id: 4, name: "Dechets", icon: <VscTrash color="primary"/>,
  items: [
    {id: 1, name: "Types déchets", path:"/responsable-commerciale/types-dechets", icon: <FaTrash/>, size:"meduim"},
    {id: 2,name: "Stocks déchets", path:"/responsable-commerciale/stock-dechets", icon: <VscTrash/>, size:"meduim"},
    {id: 3,name: "Commandes déchets", path:"/responsable-commerciale/commandes-dechets", icon: <RiShoppingBasketFill/>, size:"meduim"},
  ], size:"meduim"},
 ];