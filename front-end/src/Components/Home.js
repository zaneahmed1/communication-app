import React from 'react'
import {useNavigate} from "react-router-dom"
import chat from "../../src/chat.png"
import logo from "../../src/logo.png"
import "../Components/Home.scss"

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className='home'>
      <div className='home__ left'>
      <div className='home__logo'>
      <img src={logo} alt="logo"/>
      </div>
      <div className='home__image'>
    <img src={chat} alt="chat-image"/>
      </div>
      </div>

      <div className='home__right'>
        <div className='home__text'>
     <h1>Let's Chat with TouchTalk!</h1>
     <h4>TouchTalk is an augmentative and alternative communication (AAC) app for  </h4>
     <h4>individuals with difficulties using their natural voice.</h4>
        </div>
        <div className='home__button'>
     <button onClick={()=>navigate('/home')}>Chat</button>
        </div>
      </div>
    </div>
  )
}
