import React, {useState} from 'react'
import ButtonCard from './ButtonCard'


export default function PeopleButtons({buttons}) {


  let peopleButtons =  buttons.filter(button=>button.button_category === "People")
  

  return (
    <div>
    {peopleButtons.map((button) => {
      return <ButtonCard key={button.id} button={button}/>
    })}
    </div>
  )
}