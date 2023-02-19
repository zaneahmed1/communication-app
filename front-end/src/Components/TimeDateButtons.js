import React from 'react'
import ButtonCard from './ButtonCard'

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
