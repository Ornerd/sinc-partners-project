import React, { useEffect, useState } from 'react'
import logo from '../assets/logos/SINC LOGO black outline 1.png'
import Button from './Button'

const Navbar = () => {
  const [windowSize, setWIndowSize] = useState(window.innerWidth)
  const [clicked, setClicked] = useState(false)

  useEffect(()=> {  
    const handleScreenResize= ()=> { //the lengths I go to get responsive layouts ehh! shoutout to ksforgeeks.org though for this idea
      setWIndowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleScreenResize)
    return ()=> {
      window.removeEventListener('resize', handleScreenResize)
    }
  }, [])

    const navbarContent = [{id: 0, name: 'About'}, {id: 1, name: 'SIP'}, {id: 2, name: 'Studio'}, {id: 3, name: 'SEEQ'}, {id: 4, name: 'Platforms'}, {id: 5, name: 'Initiatives'}, {id: 6, name: 'More'}]
  return (
    <>
    <nav className={`z-[10240] fixed w-screen flex justify-center align-middle bg-[#f8f4f4] ${windowSize < 930? 'px-5': ''}`} >
     
      <div className='w-full max-w-[1180px] py-3  flex flex-row justify-between align-middle'>
        <div className='mr-5 w-fit'>
            <img src={logo} alt="sinc-logo"/>
        </div>

         {/* menu for larger screens */}
        <div className={`${windowSize >= 930? '': 'hidden'} flex flex-row align-middle justify-between w-full`}>
            <div className='flex flex-row align-middle'>
              {navbarContent.map((link)=> <a key={link.id} className='mr-5 py-2 pt-5 font-semibold cursor-pointer'>{link.name}</a>)}
            </div>
           

            <div className='pt-2'>
            <Button buttonText= 'SINC with us' buttonStyle='bg-[#20888f] mr-4 text-white'/>
            <Button buttonText= 'Apply for SIP 1.0' buttonStyle='bg-[#303030] text-white'/>
            </div>
        </div>   

        <div className={`${windowSize < 930? '': 'hidden'} flex flex-col justify-center space-y-1 rounded-md h-full w-fit cursor-pointer`} onClick={()=>setClicked(active => !active)}>
          <span className='w-6 h-0.5 bg-black'></span>
          <span className='w-6 h-0.5 bg-black'></span>
          <span className='w-6 h-0.5 bg-black'></span>
        </div>     
      </div>

    </nav>
    {/* menu for less large screens */}
    <div className={`${clicked && windowSize < 930? '': 'hidden'} z-[10000] bg-[#f8f4f4] fixed top-[88px] max-w-[600px] flex flex-col align-top justify-between w-full border-2 shadow-md divide-y divide-slate-500`} >
      <div className='flex flex-col align-middle divide-y divide-slate-300'>
        {navbarContent.map((link)=> <a key={link.id} className='flex w-full align-center mr-5 py-3 pl-4 font-semibold cursor-pointer select-none hover:bg-slate-300'>{link.name}</a>)}
      </div>
          <div className='py-2'>
      <Button buttonText= 'SINC with us' buttonStyle='bg-[#20888f] mr-4 text-white'/>
      <Button buttonText= 'Apply for SIP 1.0' buttonStyle='bg-[#303030] text-white'/>
      </div>
    </div>
    </>
  )
}

export default Navbar