import React from 'react'
import ButtonCard from './ButtonCard'

export default function ThingsButtons({buttons}) {
    let thingsButtons =  buttons.filter(button=>button.button_category === "Things")
  

    return (
      <div>
      {thingsButtons.map((button) => {
           return <ButtonCard key={button.id} button={button}/>
          })}
      </div>
    )
}
