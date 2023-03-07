import React, {useState} from 'react'
import ButtonCard from './ButtonCard'
import "../Components/HomeButtons.scss"
import clear from "../clearcolor.png"
import { MenuItem } from "@mui/material";


export default function HomeButtons({buttons, searchInput, setSearchInput, dropDownNav, setDropDownNav}) {
  const copy = [...buttons]
  let homeButtons =  copy.filter(button=>button.button_category === "Home")
  
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

      const handleNav = () => {
        setDropDownNav(!dropDownNav);
      };
  
    return (
      <div className='homeButtons'>
        <div className='homeButtons__input'>
          <div onClick={handleNav}>
          <span>yo</span>
          </div>
            {dropDownNav && (
              <div><MenuItem onClick={() => navigate("/home")}>home</MenuItem> <MenuItem onClick={() => navigate("/people")}>people</MenuItem> <MenuItem onClick={() => navigate("/questions")}>questions</MenuItem> <MenuItem onClick={() => navigate("/actions")}>actions</MenuItem> <MenuItem onClick={() => navigate("/things")}>things</MenuItem> <MenuItem onClick={() => navigate("/chat")}>chat</MenuItem> <MenuItem onClick={() => navigate("/keyboard")}>keyboard</MenuItem></div>
            )}
    
        <input value={searchInput} type="text" onChange={handleChange}/>  
        <img src={clear} className="homeButtons__input__clear" onClick={handleClick} width="5%" height="10.5%"/>
        </div>
        <div className='homeButtons__buttons'>
      {dataToDisplay.map((button) => {
        return <ButtonCard key={button.id} button={button} setSearchInput={setSearchInput}/>
      })}
        </div>
      </div>
    )
}
