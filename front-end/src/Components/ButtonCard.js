import React from 'react'

export default function ButtonCard({button}) {
  return (
    <div className='buttonCard'>
        <img className='buttonCard__image'src={button.button_image} alt={button.button_label}  width="400" height="400"/>
    </div>
  )
}
