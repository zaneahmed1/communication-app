import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import home from "../home.png"
import { MenuItem } from "@mui/material";


export default function PageNavigation({buttons, dropDownNav, setDropDownNav}) {

    const navigate = useNavigate();
    const location = useLocation();

    const copy = [...buttons]
    const people = copy?.find((type)=>{
        if(type.button_label === "People"){
           return type.button_image
       }
    })
    
    const handleNav = () => {
        setDropDownNav(!dropDownNav);
      };


  return (
    <div>
    <div onClick={handleNav}>
         {location.pathname === "/home" && <img src= {home} alt='home' width='200px' height='200px'/> }
         {location.pathname === "/people" && <img src= {people.button_image} alt='people' width='200px' height='200px'/> }

    </div>
    {dropDownNav && (
        <div><MenuItem onClick={() => navigate("/home")}>home</MenuItem> <MenuItem onClick={() => navigate("/people")}><img src={people?.button_image} width='200px'/></MenuItem> <MenuItem onClick={() => navigate("/questions")}>questions</MenuItem> <MenuItem onClick={() => navigate("/actions")}>actions</MenuItem> <MenuItem onClick={() => navigate("/things")}>things</MenuItem> <MenuItem onClick={() => navigate("/chat")}>chat</MenuItem> <MenuItem onClick={() => navigate("/timedate")}>time/date</MenuItem></div>
      )}
          </div>
  )
}
