import React from 'react'
import ButtonCard from './ButtonCard'
import "../Components/HomeButtons.scss"
import clear from "../clearcolor.png"

export default function QuestionsButtons({buttons, searchInput, setSearchInput}) {
  const copy = [...buttons]
  let questionsButtons =  copy.filter(button=>button.button_category === "Questions")

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  let dataToDisplay = questionsButtons
console.log(dataToDisplay)
if (searchInput) {
  dataToDisplay = questionsButtons.filter((button) => {
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
