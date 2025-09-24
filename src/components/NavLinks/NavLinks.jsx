import React from 'react'
import { NavLink } from "react-router-dom";


function NavLinks({title, link}) {
  return (
     <NavLink className="underline-animation" to={link} >{title}</NavLink>
  )
}

export default NavLinks