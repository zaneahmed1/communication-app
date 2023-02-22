import React from 'react'
import "../Components/NavBar.scss"


export default function NavBar() {
  return (
    <div className='navBar'>
        <nav>
                <div className='navBar__logo'>touchtalk</div>
                <div className='navBar__list'>
                <div className='navBar__listItem'>home</div>
                <div className='navBar__listItem'>gear</div>
                </div>
      
        </nav>
    </div>
  )
}
