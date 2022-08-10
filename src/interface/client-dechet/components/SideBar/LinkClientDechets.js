import React from "react";
import { BsFillCalendarDateFill, BsTrashFill, BsTools ,BsFillBasketFill} from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { FaMapMarkedAlt} from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri"

export const LinkClientDechets= [
    {id: 1, name: "Dashboard",path:"/client-dechets", icon: <ImStatsDots/>, size:"meduim"},
    {id: 2, name: "Panier",path:"/client-dechets/panier", icon: <BsFillBasketFill/>, size:"meduim"},
    {id: 3, name: "Commander",path:"/client-dechets/achat-dechets", icon: <RiShoppingBasketFill/>, size:"meduim"},
    {id: 4, name: "Historique",path:"/client-dechets/historique-client-dechets", icon: <BsFillBasketFill/>} ,
    {id: 5, name: "Reclamation",path:"/client-dechets/reclamation", icon: <RiShoppingBasketFill/>, size:"meduim"},
 ];