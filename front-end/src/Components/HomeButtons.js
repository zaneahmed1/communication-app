import React, {useState} from 'react'
import ButtonCard from './ButtonCard'
import "../Components/HomeButtons.scss"
import clear from "../clearcolor.png"
import { MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PageNavigation from './PageNavigation';


export default function HomeButtons({buttons, searchInput, setSearchInput, dropDownNav, setDropDownNav}) {

  const copy = [...buttons]
  

  let homeButtons =  copy.filter(button=>button.button_category === "Home")

  // const handleLocation = () => {

  //   if(location.pathname === "/home"){

  //     return <img src= ''  alt='home' width='200px' height='200px'/>

  //   } 
  // }
  
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  let dataToDisplay = homeButtons
  if (searchInput) {
    dataToDisplay = homeButtons.filter((button) => {
      const label = button.button_label.toLowerCase()
      console.log(label)
      if(label.startsWith(searchInput.toLowerCase()))
      return button
      //label.starstWith(searchInput.toLowerCase());
    });
  }
  
    const handleClick = (e) => {
      setSearchInput('');
      }

  
    return (
      <div className='homeButtons'>
        <div className='homeButtons__input'>
          <div className='homeButtons__input__nav'>
            <PageNavigation buttons={buttons} dropDownNav={dropDownNav} setDropDownNav={setDropDownNav}/>
          </div>
      <div className='homeButtons__input__input'>
        <input value={searchInput} type="text" onChange={handleChange}/>  
        <img src={clear} className="homeButtons__input__clear" onClick={handleClick} width="5%" height="10.5%"/>
      </div>
        </div>
        <div className='homeButtons__buttons'>
      {dataToDisplay.map((button) => {
        return <ButtonCard key={button.id} button={button} setSearchInput={setSearchInput}/>
      })}
        </div>
      </div>
    )
}
