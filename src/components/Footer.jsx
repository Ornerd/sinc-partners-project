import React from 'react'
import Button from './Button'
import footerLogo from '../assets/logos/SINC LOGO white outline 1.png'

const Footer = () => {
  return (
    <footer className='bg-black display block text-white px-6 md:px-0'>
      <section className='max-w-[1180px] mx-auto pt-14'>
        <h1 className='text-3xl md:text-5xl mb-6'>Newsletter</h1>
        <p className='mb-8 md:mb-28 max-w-[550px]'>Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.</p>

        <form action="submit" className='mt-12 mb-12 border-[1px] border-white rounded-3xl w-full max-w-[450px] flex relative overflow-hidden'>
          <input placeholder='Enter your email address' className='pl-4 bg-transparent text-white w-full h-full rounded-3xl absolute'/>
          <Button buttonStyle={'z-10 bg-white text-black w-fit font-bold ml-auto'} buttonText={'Subscribe'}/>
        </form>
      </section>
      <section className='w-full grid grid-flow-row lg:grid-flow-col lg:pl-[7%] border-[#ffffff46] border-t-[1px] border-b-[1px] grid-cols-1 lg:grid-cols-[3fr_1fr]'>
        <div className='w-full h-full flex flex-nowrap flex-col lg:flex-row pt-8 pb-6'>
          <div className='flex flex-col w-full lg:w-1/4'>
            <img src={footerLogo} alt='SINC white logo' className='w-fit'/>
            <p className='mt-auto pr-8 pb-12 lg:pb-0 font-thin max-w-[600px]'>SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)</p>
          </div>
          
          <div className='flex flex-wrap justify-between lg:w-3/4 w-full'>
            <ul className='w-1/2 md:w-1/4 whitespace-nowrap'>
                <li className='mb-6 font-bold'>Platforms</li>
                <li className='mb-4 font-thin cursor-pointer'>Kofoundme</li>
                <li className='mb-4 font-thin cursor-pointer'>InResidency</li>
                <li className='mb-4 font-thin cursor-pointer'>Service Market</li>
                <li className='mb-4 font-thin cursor-pointer'>Founders School</li>
                <li className='mb-4 font-thin cursor-pointer'>Metty</li> 
                <li className='mb-4 font-thin cursor-pointer'>Grantty</li>
                <li className='mb-4 font-thin cursor-pointer'>Boldtell</li>
                <li className='mb-6 font-thin cursor-pointer lg:mb-0'>Chekwa</li>
            </ul>
            <ul className='w-1/2 md:w-1/4 whitespace-nowrap'>
              <li className='mb-6 font-bold cursor-pointer'>Initiatives</li>
              <li className='mb-4 font-thin cursor-pointer'>Jabi Plains</li>
              <li className='mb-4 font-thin cursor-pointer'>Local Pricing Initiative</li>
              <li className='mb-4 font-thin cursor-pointer'>Scholarship Program</li>
              <li className='mb-4 font-thin cursor-pointer'>SSMN Pricing</li>
              <li className='mb-4 font-thin cursor-pointer'>University STEM</li>  
              <li className='mb-4 font-thin cursor-pointer'>University InResidency</li> 
              <li className='mb-4 font-thin cursor-pointer'>1M Nigeria Products</li> 
              <li className='mb-6 font-thin cursor-pointer lg:mb-0'>Founders Festival</li> 
            </ul>
        
            <ul className='w-1/2 md:w-1/4 whitespace-nowrap'>
              <li className='mb-6 font-bold'>About Us</li>
              <li className='mb-4 font-thin cursor-pointer'>Who We Are</li>
              <li className='mb-4 font-thin cursor-pointer'>Our People</li>
              <li className='mb-4 font-thin cursor-pointer'>Concept Innovations</li>
              <li className='mb-4 font-thin cursor-pointer'>Our Process</li>
              <li className='mb-4 font-thin cursor-pointer'>Investors Network</li>
              <li className='mb-4 font-thin cursor-pointer'>CSR & Events</li>
              <li className='mb-4 font-thin cursor-pointer'>Career</li>
              <li className='mb-6 font-thin cursor-pointer lg:mb-0'>Contact</li>
            </ul>
            <ul className='w-1/2 md:w-1/4 whitespace-nowrap'>
              <li className='mb-6 font-bold'>More</li>
              <li className='mb-4 font-thin cursor-pointer'>Services</li>
              <li className='mb-4 font-thin cursor-pointer'>Equity Jobs</li>
              <li className='mb-4 font-thin cursor-pointer'>EIR Program</li>
              <li className='mb-4 font-thin cursor-pointer'>Offers</li>
              <li className='mb-4 font-thin cursor-pointer'>Innovation News</li>
              <li className='mb-4 font-thin cursor-pointer'>FAQ</li>
              <li className='mb-4 font-thin cursor-pointer'>Blog & Resources</li>
              <li className='mb-6 font-thin cursor-pointer lg:mb-0'>Press</li>
            </ul>
          </div>
          
        </div>
        <div  className='w-full h-full flex flex-col border-[#ffffff46] border-t-[1px] lg:border-t-0 md:border-l-[1px] pt-8 pb-6 lg:px-4'>
          <span className='mb-6 font-bold'>Location</span>
          <span className='mb-4 font-thin'>Abuja, Nigeria</span>
          <span className='mb-4 font-thin'>Lagos, Nigeria</span>
          <span className='mb-4 font-thin'>Philadelphia, USA</span>
          <div></div>
        </div>
      </section>
      <section>
      <p>Guaranteed 2x on your service or cash investment, usually been the first to invest. Get in early and SINC your guaranty!</p>
      2023 SINC Partners Ltd. All rights reserved
      Privacy Policy 
Terms of Service
Security
We are a business built on the foundation of Christian values and belief
      </section>
    </footer>
  )
}

export default Footer