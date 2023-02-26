import {useEffect, useState} from 'react'
import {auth} from '../Services/Firebase'
import {useNavigate, Link} from 'react-router-dom'
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {useAuthValue} from './AuthContext'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import "../Components/Signup.scss"

const API = process.env.REACT_APP_API_URL;

function Signup({setExistingUser, existingUser}) {

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {setTimeActive, currentUser} = useAuthValue()


  const validatePassword = () => {
    let isValid = true

      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }

    return isValid
  }
    //  const addUser = async () => {
    //   if(currentUser?.emailVerified){
    //     axios
    //     .post(`${API}/users`, {...existingUser, uuid: currentUser.uid})
    //         .then(res => {
    //           if(res.data.payload.uuid){
    //             setExistingUser(res.data.payload)
    //             navigate("/profile")
    //             console.log(existingUser)
    //           }
    //         })
    //   }
    // }

  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser) 
          // addUser()
          .then(() => {
            setTimeActive(true)
            navigate('/verify-email')
          }).catch((err) => alert(err.message))
        })
        .catch(err => setError(err.message))
    }

    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setFirstName('')
    setLastName('')
  }


  return (
    <div className='signup'>

        {error && <div >{error}</div>}
        <div className='signup__left'>
       
        </div>
        <div className='signup__right'>
        <form onSubmit={register} name='registration_form'>
        <h1>Sign Up</h1>
        <div className='signup__labelWrapper'>
        <label className='signup__label'>First Name</label>
        <label className='signup__label'>Last Name</label>
        </div>
        <div className='signup__nameWrapper'>
          <TextField
          className='signup__input signup__name'
            type='text' 
            value={firstName}
            placeholder="Enter your first name"
            required
            onChange={e => setFirstName(e.target.value)}/>
          <TextField
          className='signup__input signup__name'
            type='text' 
            value={lastName}
            placeholder="Enter your last name"
            required
            onChange={e => setLastName(e.target.value)}/>
        </div>
        <label>Email</label>
          <TextField
          className='signup__input'
            type='email' 
            value={email}
            placeholder="Enter your email"
            required
            onChange={e => setEmail(e.target.value)}/>
                    <label>Password</label>
          <TextField
          className='signup__input'
            type='password'
            value={password} 
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>
        <label>Confirm Password</label>
            <TextField
            className='signup__input'
            type='password'
            value={confirmPassword} 
            required
            placeholder='Confirm password'
            onChange={e => setConfirmPassword(e.target.value)}/>

          <Button  type='submit'>Signup</Button>
        <div>
          Already have an account?  
          <Link to='/login'> Login</Link>
        </div>
        </form>
        </div>
      </div>

  )
}

export default Signup