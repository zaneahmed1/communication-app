import React from 'react'
import "../Components/NavBar.scss"
import home from "../home.png"
import gear from "../gear.png"
import logo from "../logo.png"


export default function NavBar() {
  return (
    <div className='navBar'>
                <div className='navBar__logo'><img src={logo} height="100px"/></div>
        <nav>
                <div className='navBar__listItem'><img src={home} height="70px"/></div>
                <div className='navBar__listItem'><img src={gear} height="70px"/></div>
      
        </nav>
    </div>
  )
}
