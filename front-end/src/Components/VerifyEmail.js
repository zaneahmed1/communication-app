import {useAuthValue} from './AuthContext'
import {useState, useEffect} from 'react'
import {auth} from '../Services/Firebase'
import {sendEmailVerification} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const API = process.env.REACT_APP_API_URL;

function VerifyEmail({setExistingUser, existingUser}) {

  const {currentUser} = useAuthValue()
  const [time, setTime] = useState(60)
  const {timeActive, setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  const addUser = async () => {
    if(currentUser?.emailVerified){
      axios
      .post(`${API}/users`, {...existingUser, uuid: currentUser?.uid})
          .then(res => {
            if(res.data.payload.uuid){
              setExistingUser(res.data.payload)
              navigate("/profile")
              console.log(existingUser)
            }
          })
    }
  }


  useEffect(() => {
    const interval = setInterval(() => {
      currentUser?.reload()
      .then(() => {
        if(currentUser?.emailVerified){
          addUser()
          // setExistingUser({...existingUser, uuid: currentUser.uid})
          // setExistingUser({...existingUser, email: currentUser.email})
          // setExistingUser(existingUser =>({...existingUser, uuid: currentUser.uid,
          //   email: currentUser.email,
          //   firstname: currentUser.displayName,
          //   lastname: currentUser.displayName,
          //   photourl: currentUser.photoURL}))
          clearInterval(interval)
          navigate('/profile')
        }
      })
    }, 1000)
  }, [navigate, currentUser])

  useEffect(() => {
    let interval = null
    if(timeActive && time !== 0 ){
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    }else if(time === 0){
      setTimeActive(false)
      setTime(60)
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [timeActive, time, setTimeActive])

  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
    .then(() => {
      setTimeActive(true)
    }).catch((err) => {
      alert(err.message)
    })
  }

  return (
    <div className='center'>
      <div className='verifyEmail'>
        <h1>Verify your Email Address</h1>
        <p>
          <strong>A Verification email has been sent to:</strong><br/>
          <span>{currentUser?.email}</span>
        </p>
        <span>Follow the instruction in the email to verify your account</span>       
        <button 
          onClick={resendEmailVerification}
          disabled={timeActive}
        >Resend Email {timeActive && time}</button>
      </div>
    </div>
  )
}

export default VerifyEmail