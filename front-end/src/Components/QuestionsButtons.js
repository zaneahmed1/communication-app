import React from 'react'
import ButtonCard from './ButtonCard'

export default function QuestionsButtons({buttons}) {
    let questionsButtons =  buttons.filter(button=>button.button_category === "Questions")
  

    return (
      <div>
      {questionsButtons.map((button) => {
           return <ButtonCard key={button.id} button={button}/>
          })}
      </div>
    )
}
