import React from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';

export default function ButtonCard({button}) {

  const { speak } = useSpeechSynthesis();

  return (
    <div className='buttonCard'  onClick={() => speak({ text: button.button_message })}>
      
        <img className='buttonCard__image'src={button.button_image} alt={button.button_label}  width="400" height="400"/>
    </div>
  )
}
