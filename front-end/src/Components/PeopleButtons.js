import React, {useState} from 'react'
import ButtonCard from './ButtonCard'


export default function PeopleButtons({buttons, searchInput, setSearchInput}) {
  const copy = [...buttons]
  let peopleButtons =  copy.filter(button=>button.button_category === "People")

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  let dataToDisplay = peopleButtons
console.log(dataToDisplay)
  if (searchInput) {
    dataToDisplay = peopleButtons.filter((button) => {
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