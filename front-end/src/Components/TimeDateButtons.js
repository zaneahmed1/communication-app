import React from 'react'
import ButtonCard from './ButtonCard'
import "../Components/HomeButtons.scss"
import clear from "../clearcolor.png"

export default function TimeDateButtons({buttons, setSearchInput, searchInput}) {
  const copy = [...buttons]
  let timeDateButtons =  copy.filter(button=>button.button_category === "Time/Date")

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  let dataToDisplay = timeDateButtons
console.log(dataToDisplay)
if (searchInput) {
  dataToDisplay = timeDateButtons.filter((button) => {
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
