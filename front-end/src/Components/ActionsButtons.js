import React from 'react'
import ButtonCard from './ButtonCard'

export default function ActionsButtons({buttons}) {
    let actionsbuttons =  buttons.filter(button=>button.button_category === "Actions")
  

    return (
      <div>
      {actionsbuttons.map((button) => {
           return <ButtonCard key={button.id} button={button}/>
          })}
      </div>
    )
}
