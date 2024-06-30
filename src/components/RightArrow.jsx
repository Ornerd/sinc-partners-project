import React from 'react'

const RightArrow = ({arrowStyle, onClick}) => {
  return (
    <button className={`rounded-[50%] w-16 h-16 font-semibold border-[1px] border-[#303030] absolute left-0 right-0 mx-auto mr-[30%] md:mr-[35%] lg:mr-[40%] ${arrowStyle}`} onClick={onClick}><i className="fa fa-arrow-right text-4xl" aria-hidden="true" ></i></button>
  )
}

export default RightArrow