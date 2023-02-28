import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from '../Services/Firebase'
import {useNavigate} from 'react-router-dom'
import "../Components/Profile.scss"
import { Button } from '@mui/material'
import { useState, useEffect } from "react";
import axios from "axios"
import Avatar from '@mui/material/Avatar'
import Loading from './Loading'

function Profile({loading, setLoading}) {
  const API = process.env.REACT_APP_API_URL;
const [users, setUsers] = useState([])

  const {currentUser} = useAuthValue()
  const navigate = useNavigate()

  const handleClick = () => {
    signOut(auth)
    navigate('/login')
  }

  // if(loading){
  //   return (<div><Loading/></div>)
  // }

  useEffect(() => {
    axios
      .get(`${API}/users`)
      .then((response) => {
        setUsers(response.data.payload)
        // setLoading(false)
      })
      .catch((e) => {
        console.error("catch", e)
        // setLoading(false)
      });
      
      // onAuthStateChanged(auth, (user) => {
      //   setCurrentUser(user)
      // })
    }, []);


    const foundUser = users.find(user => user.uuid === currentUser?.uid)

    const image = () => {
      if(foundUser?.photourl !== ""){
        return (<div className='profile__avatar'>  <Avatar sx={{ width: 80, height: 80 }} alt={foundUser?.firstname} src={foundUser?.photourl} /></div>)
      } else {
        return(<div className='profile__avatar'> <Avatar sx={{ width: 80, height: 80 }}>{foundUser?.firstname[0]}{foundUser?.lastname[0]}</Avatar></div>)
      }
    }



  return (

        <div className='profile'>
          <div className='profile__container'>
            {image()}
            <div className='profile__text'> 
          <div className='profile__title'>Welcome {foundUser?.firstname}!</div>
          <div className='profile__detail'>First Name: {foundUser?.firstname}</div>
          <div className='profile__detail'>Last Name: {foundUser?.lastname}</div>
          <div className='profile__detail'>Email: {currentUser?.email}</div>
          <Button variant="contained" onClick={handleClick}>Sign Out</Button>
            </div>
          </div>
        </div>

  )
}

export default Profile