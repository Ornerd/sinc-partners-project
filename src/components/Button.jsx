import React from 'react'

const Button = ({buttonStyle, buttonText}) => {
  return (
    <button className={`rounded-3xl font-semibold py-3 px-6 whitespace-nowrap hover:bg-white hover:text-black ${buttonStyle}`}>{buttonText}</button>
  )
}

export default Button