import React from 'react'
import ButtonCard from './ButtonCard'

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
      return label.includes(searchInput.toLowerCase());
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
