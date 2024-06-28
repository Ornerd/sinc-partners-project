import React from 'react'

const NavigLink = ({linkName, linkStyle}) => {
  return (
    <span className={`font-bold flex items-center cursor-pointer ${linkStyle}`}><p className='underline mr-2'>{linkName}</p><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
  )
}

export default NavigLink