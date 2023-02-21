import React from 'react'
import {useNavigate} from "react-router-dom"
import { useSpeechSynthesis } from 'react-speech-kit';

import "../Components/ButtonCard.scss"

export default function ButtonCard({button, setSearchInput}) {

  const { speak } = useSpeechSynthesis();
  const navigate = useNavigate();

  const handleClick = () => {
    speak({ text: button.button_message });

    
    setSearchInput(button.button_label)
    if(button.button_navigate !== "na"){
      navigate('/' + button.button_navigate) 
      setSearchInput('')
    } 
    if(button.button_message === "Home"){
      navigate('/home') 
      setSearchInput('')
    }
    if(button.button_message === "Clear"){
      setSearchInput('')
    }
    
  }

  return (
    <button className='buttonCard'  onClick={handleClick}>
      
        <img className='buttonCard__image'src={button.button_image} alt={button.button_label}  width="400" height="400"/>
    </button>
  )
}
