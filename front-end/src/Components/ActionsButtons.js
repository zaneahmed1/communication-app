import React from 'react'
import ButtonCard from './ButtonCard'

export default function ActionsButtons({buttons, setSearchInput, searchInput}) {
  const copy = [...buttons]
  let actionsButtons =  copy.filter(button=>button.button_category === "Actions")

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  let dataToDisplay = actionsButtons
console.log(dataToDisplay)
  if (searchInput) {
    dataToDisplay = actionsButtons.filter((button) => {
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
