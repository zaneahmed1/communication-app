import React from 'react'
import {useNavigate} from "react-router-dom"

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
     <h1>Let's Chat with TouchTalk!</h1>
     <h4>TouchTalk is an augmentative and alternative communication (AAC) app for individuals with difficulties using their natural voice. </h4>
     <button onClick={()=>navigate('/home')}>Chat</button>
    </div>
  )
}
