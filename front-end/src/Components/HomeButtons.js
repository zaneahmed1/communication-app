import React, {useState} from 'react'
import ButtonCard from './ButtonCard'


export default function HomeButtons({buttons, searchInput, setSearchInput}) {
  const copy = [...buttons]
  let homeButtons =  copy.filter(button=>button.button_category === "Home")
  
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  let dataToDisplay = homeButtons

  if (searchInput) {
    dataToDisplay = homeButtons.filter((button) => {
      const label = button.button_label[0].toLowerCase()
      return label.includes(searchInput[0].toLowerCase());
    });
  }



  return (
    <div>
      <div>
      <input value={searchInput} type="text" onChange={handleChange}/>
      </div>
    {dataToDisplay.map((button) => {
      return <ButtonCard key={button.id} button={button} setSearchInput={setSearchInput}/>
    })}
    </div>
  )
}
