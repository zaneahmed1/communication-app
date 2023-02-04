import React from 'react'
import ButtonCard from './ButtonCard'

export default function ChatButtons({buttons}) {
    let chatButtons =  buttons.filter(button=>button.button_category === "Chat")
  

    return (
      <div>
      {chatButtons.map((button) => {
           return <ButtonCard key={button.id} button={button}/>
          })}
      </div>
    )
}
