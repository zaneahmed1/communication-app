import {useAuthValue} from './AuthContext'
import {useState, useEffect} from 'react'
import {auth} from '../Services/Firebase'
import {sendEmailVerification} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import "../Components/VerifyEmail.scss"
import { Button } from '@mui/material'



const API = process.env.REACT_APP_API_URL;

function VerifyEmail({handleClose}) {

  const {currentUser} = useAuthValue()
  const navigate = useNavigate()

  const addUser = async () => {
    if(currentUser?.emailVerified){
      axios
      .post(`${API}/users`, {...existingUser, uuid: currentUser?.uid, firstname: firstName, lastname: lastName})
          .then(res => {
            if(res.data.payload.uuid){
              setExistingUser(res.data.payload)
              navigate("/profile")
            }
          })
    }
  }


  useEffect(() => {
      currentUser?.reload()
      .then(() => {
        if(currentUser?.emailVerified){
         handleClose()
          addUser()
          navigate('/profile')
        }
      })
  }, [navigate, currentUser])


  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
  }



  return (
    <div>


      <div className='modalContent'>
        <img src='https://cdn-icons-png.flaticon.com/512/2875/2875394.png' height='150px'/>
        <div className='modalContent__title'>Verify your email adress</div>
        <div  className='modalContent__text'>A verification email has been sent to:</div>
          <span>{currentUser?.email}</span>
        <span>Follow the instructions in the email to verify your account.</span>       
        <Button variant="contained"
          onClick={resendEmailVerification}
        >Resend Email </Button>
      </div>

    </div>
    ) 
}

export default VerifyEmail