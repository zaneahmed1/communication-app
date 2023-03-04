import React, {useState} from 'react'
import ButtonCard from './ButtonCard'
import "../Components/HomeButtons.scss"
import clear from "../clearcolor.png"
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import Button from '@mui/material/Button';


export default function HomeButtons({buttons, searchInput, setSearchInput}) {
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
  
    return (
      <div className='homeButtons'>
        <div className='homeButtons__input'>
        <TextField fullWidth 
        value={searchInput} type="text" onChange={handleChange}
        variant="filled"
        size="large"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button >
              <img src={clear} className="homeButtons__input__clear" onClick={handleClick} width="50" height="50"/>
              </Button>
            </InputAdornment>
          ),
        }}
        
      />
       {/* <div className='homeButtons__input'>
    <input value={searchInput} type="text" onChange={handleChange}/> 
    <img className="homeButtons__input__clear" src={clear} onClick={handleClick} width="5%" height="20.5%"/>

    </div> */}
        </div>
        <div className='homeButtons__buttons'>
      {dataToDisplay.map((button) => {
        return <ButtonCard key={button.id} button={button} setSearchInput={setSearchInput}/>
      })}
        </div>
      </div>
    )
}
