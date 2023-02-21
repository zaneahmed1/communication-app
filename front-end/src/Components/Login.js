import {useState} from 'react'
import { Link } from 'react-router-dom'
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from '../Services/Firebase'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from './AuthContext'
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
      navigate('/')
    }
    })
    .catch(err => setError(err.message))
  }

  return(
      <div className='login'>
        {error && <div>{error}</div>}
        <div className='login__right'>
        <h1>Log in</h1>
        <form onSubmit={login} name='login_form'>
          <label>Email</label>
          <input 
            type='email' 
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}/>
         <label>Password</label>
          <input 
            type='password'
            value={password}
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>

          <button type='submit'>Login</button>
        </form>
        <p>
          Don't have and account? 
          <Link to='/signup'>Create one here</Link>
        </p>
        </div>
        <div className='login__left'>

        </div>
      </div>
  )
}

export default Login