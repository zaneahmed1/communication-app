import React from "react";
import "../Components/NavBar.scss";
import home from "../home.png";
import gear from "../gear.png";
import logo from "../logo.png";
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { MenuItem } from "@mui/material";
import {auth} from '../Services/Firebase'

export default function NavBar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log("hello")
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
            <MenuItem className="dropdown__Item" onClick={() => navigate("/profile")}>Profile</MenuItem>
            <MenuItem className="dropdown__Item" onClick={() => navigate("/login")}>Login</MenuItem>
          </div>
        )}
        </div>
      </nav>
    </div>
  );
}
