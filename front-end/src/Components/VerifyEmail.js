import {useAuthValue} from './AuthContext'
import {useState, useEffect} from 'react'
import {auth} from '../Services/Firebase'
import {sendEmailVerification} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import "../Components/VerifyEmail.scss"
import { Modal, Button, Typography } from '@material-ui/core'



const API = process.env.REACT_APP_API_URL;

function VerifyEmail({openModal, setOpenModal, setExistingUser, existingUser}) {


  const handleClose = () => {
    setOpenModal(false)
  }


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
    const interval = setInterval(() => {
      currentUser?.reload()
      .then(() => {
        if(currentUser?.emailVerified){
          clearInterval(interval)
          handleClose()
          navigate('/profile')
        }
      })
      .catch((err) => {
        alert(err.message)
      })
    }, 1000)
  }, [navigate, currentUser])



  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
  }

  return (

 <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div >
          <Typography variant="h6" id="modal-title">
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
          </Typography>
        </div>
      </Modal>
    </div>

    ) 
}

export default VerifyEmail