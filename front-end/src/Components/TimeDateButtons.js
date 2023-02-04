import React from 'react'
import ButtonCard from './ButtonCard'

export default function TimeDateButtons({buttons}) {
    let timeDateButtons =  buttons.filter(button=>button.button_category === "Time/Date")
  

    return (
      <div>
      {timeDateButtons.map((button) => {
           return <ButtonCard key={button.id} button={button}/>
          })}
      </div>
    )
}
