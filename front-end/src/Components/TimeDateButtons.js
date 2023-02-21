import React from 'react'
import ButtonCard from './ButtonCard'
import "../Components/HomeButtons.scss"

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
      const label = button.button_label[0].toLowerCase()
      return label.includes(searchInput[0].toLowerCase());
    });
  }


  return (
    <div className='homeButtons'>
      <div className='homeButtons__input'>
      <input value={searchInput} type="text" onChange={handleChange}/>
      </div>
      <div className='homeButtons__buttons'>
    {dataToDisplay.map((button) => {
      return <ButtonCard key={button.id} button={button} setSearchInput={setSearchInput}/>
    })}
      </div>
    </div>
  )
}
