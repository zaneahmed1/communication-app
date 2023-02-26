import React from "react";
import "../Components/NavBar.scss";
import home from "../home.png";
import gear from "../gear.png";
import logo from "../logo.png";
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { MenuItem } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../Services/Firebase";

export default function NavBar({currentUser}) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogin = () => {
  navigate("/login")
  }

  const handleLogout = () => {
   signOut(auth)
   navigate('/')
  }

  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navBar">
      <div className="navBar__logo">
        <img onClick={() => navigate("/")} src={logo} height="100px" />
      </div>
      <nav>
        <div className="navBar__listItem" onClick={() => navigate("/home")}>
          <img src={home} height="70px" />
        </div>
        <div className="navBar__listItem dropdown" onClick={handleClick}>
          <img src={gear} height="70px" />
        {isDropdownOpen && (
          <div className="dropdown__Items">
            {currentUser?.emailVerified ? (<div> <MenuItem className="dropdown__Item" onClick={() => navigate("/profile")}>Profile</MenuItem>  <MenuItem className="dropdown__Item" onClick={handleLogout}>Logout</MenuItem> </div>) :      <MenuItem className="dropdown__Item" onClick={handleLogin}>Login</MenuItem>}
          </div>
        )}
        </div>
      </nav>
    </div>
  );
}
