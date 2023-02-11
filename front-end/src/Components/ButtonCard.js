import React from 'react'
import {useNavigate} from "react-router-dom"
import { useSpeechSynthesis } from 'react-speech-kit';

export default function ButtonCard({button}) {

  const { speak } = useSpeechSynthesis();
  const navigate = useNavigate();

  const handleClick = () => {
    speak({ text: button.button_message });
    if(button.button_navigate !== "na"){
      navigate('/' + button.button_navigate) 
    } 
    if(button.button_message === "Home"){
      navigate('/home') 
    }
  }

  return (
    <div className='buttonCard'  onClick={handleClick}>
      
        <img className='buttonCard__image'src={button.button_image} alt={button.button_label}  width="400" height="400"/>
    </div>
  )
}
