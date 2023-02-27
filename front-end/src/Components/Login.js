import {useState} from 'react'
import { Link } from 'react-router-dom'
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from '../Services/Firebase'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from './AuthContext'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import "../Components/Login.scss"

function Login(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          navigate('/verify-email')
        })
      .catch(err => alert(err.message))
    }else{
      navigate('/profile')
    }
    })
    .catch(err => setError(err.message))
  }

  return(
      <div className='login'>
        {error && <div>{error}</div>}
        <div className='login__right'>
        <form onSubmit={login}>
        <h1>Log in</h1>
          <label>Email</label>
          <TextField 
          className='login__input'
            type='email' 
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}/>
         <label>Password</label>
          <TextField 
          className='login__input'
            type='password'
            value={password}
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>

          <Button type='submit'>Login</Button>
        <div className='login__text'>
          Don't have and account? 
          <Link to='/signup'> Sign up here</Link>
        </div>
        </form>
        </div>
        {/* <div className='login__left'>
          
        </div> */}
      </div>
  )
}

export default Login