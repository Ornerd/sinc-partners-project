import React from 'react'
import Button from './Button'

const Footer = () => {
  return (
    <footer className='bg-black display block text-white px-6 md:px-0'>
      <section className='max-w-[1180px] mx-auto pt-14'>
        <h1 className='text-3xl md:text-5xl mb-11'>Newsletter</h1>
        <p></p>

        <form action="submit" className='mb-12 border-[1px] border-white rounded-3xl w-full max-w-[450px] flex relative'>
          <input placeholder='Enter your email address' className='pl-4 bg-transparent text-white w-full h-full rounded-3xl absolute'/>
          <Button buttonStyle={'bg-white text-black w-fit font-bold ml-auto'} buttonText={'Subscribe'}/>
        </form>
      </section>
      <section className='w-full grid grid-flow-col md:pl-[7%] border-[#ffffff46] border-t-[1px] grid-cols-[3fr_1fr]'>
        <div className='w-full h-full flex flex-nowrap'>
          <div className=''></div>
          <div className=''></div>
          <div className=''></div>
          <div className=''></div>
          <div className=''></div>
          <div className=''></div>
        </div>
        <div  className='w-full h-full flex flex-nowrap'>
          
        </div>
      </section>
    </footer>
  )
}

export default Footer