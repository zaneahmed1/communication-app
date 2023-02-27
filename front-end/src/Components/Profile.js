import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from '../Services/Firebase'
import {useNavigate} from 'react-router-dom'
import "../Components/Profile.scss"
import { Button } from '@mui/material'
import { useState, useEffect } from "react";
import axios from "axios"
import Avatar from '@mui/material/Avatar'

function Profile() {
  const API = process.env.REACT_APP_API_URL;
const [users, setUsers] = useState([])

  const {currentUser} = useAuthValue()
  const navigate = useNavigate()

  const handleClick = () => {
    signOut(auth)
    navigate('/login')
  }

  useEffect(() => {
    axios
      .get(`${API}/users`)
      .then((response) => setUsers(response.data.payload))
      .catch((e) => console.error("catch", e));
      
      // onAuthStateChanged(auth, (user) => {
      //   setCurrentUser(user)
      // })
    }, []);


    const foundUser = users.find(user => user.uuid === currentUser?.uid)

    const image = () => {
      if(foundUser?.photourl !== ""){
        return (<div>  <Avatar alt={foundUser?.firstname} src={foundUser?.photourl} /></div>)
      } else {
        return(<div> <Avatar>{foundUser?.firstname[0]}{foundUser?.lastname[0]}</Avatar></div>)
      }
    }



  return (

        <div className='profile'>
          <div className='profile__container'>
            {image()}
          <div className='profile__title'>Welcome {foundUser?.firstname}!</div>
          <div>First Name: {foundUser?.firstname}</div>
          <div>Last Name: {foundUser?.lastname}</div>
          <div>Email: {currentUser?.email}</div>
          <div>
          <Button variant="contained" onClick={handleClick}>Sign Out</Button>
          </div>
          </div>
        </div>

  )
}

export default Profile