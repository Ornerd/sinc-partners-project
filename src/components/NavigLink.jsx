import React from 'react'

const NavigLink = ({linkName, linkStyle}) => {
  return (
    <span className={`font-bold flex items-center cursor-pointer ${linkStyle}`}><p className='underline mr-2 hover:mr-4'>{linkName}</p><i className="fa fa-arrow-right hover:ml-4" aria-hidden="true"></i></span>
  )
}

export default NavigLink