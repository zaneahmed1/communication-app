import React from 'react'
import ButtonCard from './ButtonCard'
import "../Components/HomeButtons.scss"

export default function ChatButtons({buttons, setSearchInput, searchInput}) {
  const copy = [...buttons]
  let chatButtons =  copy.filter(button=>button.button_category === "Chat")
  
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  let dataToDisplay = chatButtons

  if (searchInput) {
    dataToDisplay = chatButtons.filter((button) => {
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
