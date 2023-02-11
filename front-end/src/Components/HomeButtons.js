import React, {useState} from 'react'
import ButtonCard from './ButtonCard'


export default function HomeButtons({buttons}) {


  let homeButtons =  buttons.filter(button=>button.button_category === "Home")
  

  return (
    <div>
      <h1>Title</h1>
    {homeButtons.map((button) => {
      return <ButtonCard key={button.id} button={button}/>
    })}
    </div>
  )
}
