import React from 'react'
import {useNavigate} from "react-router-dom"
import ipad from "../../src/ipad.png"
import logo from "../../src/touchtalk-logo.png"
import chat from "../../src/chat.png"
import "../Components/Home.scss"
import { Button } from '@mui/material';

export default function Home() {
  const navigate = useNavigate();
  return (
      <div className='wrapper'>
    <div className='home'>

      <div className='home__ left'>

      <div className='home__image'>
        <div className='home__image__wrapper' >

    <img src={ipad} alt="ipad-image"/>
      </div>
        </div>
      </div>

      <div className='home__right'>
        <div className='home__text'>
     <h1>Let's Chat with TouchTalk!</h1>
     <h4>TouchTalk is an augmentative and alternative communication (AAC) app for  </h4>
     <h4>individuals with difficulties using their natural voice.</h4>
        <div className='home__button'>
     <Button variant="contained" onClick={()=>navigate('/home')}>Chat</Button>
     <Button variant="contained" onClick={()=>navigate('/login')}>Login</Button>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}
