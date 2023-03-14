import React, {useState} from 'react'
import ButtonCard from './ButtonCard'
import "../Components/HomeButtons.scss"
import clear from "../clearcolor.png"
import PageNavigation from './PageNavigation'

export default function PeopleButtons({buttons, searchInput, setSearchInput, dropDownNav, setDropDownNav}) {
  const copy = [...buttons]
  let peopleButtons =  copy.filter(button=>button.button_category === "People")

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  let dataToDisplay = peopleButtons
console.log(dataToDisplay)
if (searchInput) {
  dataToDisplay = peopleButtons.filter((button) => {
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