import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from '../Services/Firebase'
import {useNavigate} from 'react-router-dom'


function Profile() {
  const {currentUser} = useAuthValue()
  const navigate = useNavigate()

  const handleClick = () => {
    signOut(auth)
    navigate('/login')
  }

  return (
      <div className='center'>
        <div className='profile'>
          <h1>Profile</h1>
          <p><strong>Email: </strong>{currentUser?.email}</p>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <button onClick={handleClick}>Sign Out</button>
        </div>
      </div>
  )
}

export default Profile