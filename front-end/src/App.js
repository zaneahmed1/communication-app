// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import Home from "../src/Components/Home"
import HomeButtons from "./Components/HomeButtons";
import QuestionsButtons from "./Components/QuestionsButtons"
import ThingsButtons from "./Components/ThingsButtons"
import TimeDateButtons from "./Components/TimeDateButtons"
import ActionsButtons from "./Components/ActionsButtons"
import ChatButtons from "./Components/ChatButtons";
import PeopleButtons from "./Components/PeopleButtons";
import NewButtonForm from "./Components/NewButtonForm";
import Login from "./Components/Login";
import {AuthProvider} from './Components/AuthContext'
import Profile from "./Components/Profile";
import Signup from "./Components/Signup"
import {onAuthStateChanged} from 'firebase/auth'
import PrivateRoute from "./Components/Private";
import {auth} from '../src/Services/Firebase'
import VerifyEmail from './Components/VerifyEmail';
import { Navigate } from "react-router-dom";


function App() {

  const API = process.env.REACT_APP_API_URL;

  const [buttons, setButtons] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)


  useEffect(() => {
      axios
        .get(`${API}/buttons`)
        .then((response) => setButtons(response.data))
        .catch((e) => console.error("catch", e));
        
        onAuthStateChanged(auth, (user) => {
          setCurrentUser(user)
        })
    }, []);

  return (
    <div className="App">
      <Router>
      <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route exact path='/' element={
            <PrivateRoute>
              <Profile path="/profile"/>
            </PrivateRoute>
          }/>
            <Route path="/login" element={
            !currentUser?.emailVerified 
            ? <Login/>
            : <Navigate to='/' replace/>
          } />
          <Route path="/signup" element={
            !currentUser?.emailVerified 
            ? <Signup/>
            : <Navigate to='/' replace/>
          } />
            <Route path="/home" element={<HomeButtons buttons={buttons}/>} />
            <Route path="/people" element={<PeopleButtons buttons={buttons}/>} />
            <Route path="/questions" element={<QuestionsButtons buttons={buttons}/>} />
            <Route path="/things" element={<ThingsButtons buttons={buttons}/>} />
            <Route path="/timedate" element={<TimeDateButtons buttons={buttons}/>} />
            <Route path="/actions" element={<ActionsButtons buttons={buttons}/>} />
            <Route path="/chat" element={<ChatButtons buttons={buttons}/>} />
            <Route path="/new" element={<NewButtonForm/>}/>
            <Route path='/verify-email' element={<VerifyEmail/>} /> 
          </Routes>
      </AuthProvider>
      </Router>

    </div>
  );
}

export default App;
