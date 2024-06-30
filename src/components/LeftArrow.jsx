import React from 'react'

const LeftArrow = ({arrowStyle, onClick, disabledArrow}) => {
  return (
    <button  onClick={onClick} className={`rounded-[50%] w-16 h-16 font-semibold border-[1px] border-[#303030] absolute left-0 right-0 mx-auto ml-[30%] md:ml-[35%] lg:ml-[40%] ${arrowStyle} ${disabledArrow?'opacity-25 pointer-events-none': 'opacity-100 pointer-events-auto'}`}><i className="fa fa-arrow-left text-4xl" aria-hidden="true"></i></button>
  )
}

export default LeftArrow