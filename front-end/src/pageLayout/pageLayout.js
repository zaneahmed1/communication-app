import React from 'react'
import "../pageLayout/pageLayout.scss"

export default function pageLayout( {children}) {
  return (
    <div className='pageLayout'>
        {children}
    </div>
  )
}
