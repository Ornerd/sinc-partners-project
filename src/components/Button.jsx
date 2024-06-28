import React from 'react'

const Button = ({buttonStyle, buttonText}) => {
  return (
    <button className={`rounded-3xl text-white font-semibold py-3 px-6 whitespace-nowrap ${buttonStyle}`}>{buttonText}</button>
  )
}

export default Button