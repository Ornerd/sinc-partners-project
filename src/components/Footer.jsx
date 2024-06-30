import React from 'react'
import Button from './Button'
import footerLogo from '../assets/logos/SINC LOGO white outline 1.png'
import GasusLogo from '../assets/logos/other logos/GASUS white SVG-01 1.png'
import accreditedLogo from '../assets/logos/other logos/Frame 49241.png'
import WhatsAppLogo from '../assets/logos/other logos/whatsapp-color-svgrepo-com 1.png'

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
            <p className='mt-auto pr-8 pb-12 lg:pb-0 font-thin max-w-[600px] text-[#C9C9C9]'>SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)</p>
          </div>
          
          <div className='flex flex-wrap justify-between lg:w-3/4 w-full text-[#C9C9C9]'>
            <ul className='w-1/2 md:w-1/4 whitespace-nowrap'>
                <li className='mb-6 font-bold text-white'>Platforms</li>
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
              <li className='mb-6 font-bold cursor-pointer text-white'>Initiatives</li>
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
              <li className='mb-6 font-bold text-white'>About Us</li>
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
              <li className='mb-6 font-bold text-white'>More</li>
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
        <div  className='w-full h-full flex flex-col border-[#ffffff46] text-[#C9C9C9] border-t-[1px] lg:border-t-0 md:border-l-[1px] pt-8 pb-6 lg:px-4'>
          <span className='mb-6 font-bold'>Location</span>
          <span className='mb-4 font-thin'>Abuja, Nigeria</span>
          <span className='mb-4 font-thin'>Lagos, Nigeria</span>
          <span className='mb-4 font-thin'>Philadelphia, USA</span>
          <div className='flex mt-auto items-end'>
            <span className='w-3/5'>
              <img src={accreditedLogo} alt="" className='w-fit' />
            </span>
            <span className='flex flex-col items-center cursor-pointer'>
              <img src={WhatsAppLogo} alt="" />
              <p>Chat With Us</p>
            </span>
          </div>
        </div>
      </section>
      <section className='flex flex-wrap lg:px-[7%] text-[#C9C9C9]'>
        <p className='pt-12 pb-12 text-sm'>Guaranteed 2x on your service or cash investment, usually been the first to invest. Get in early and SINC your guaranty!</p>
        <div className='w-[30%] ml-auto pt-8 flex justify-between'>
         <img src={GasusLogo} className='h-[40px]'/>
          <p className='text-xs'>We are a business built on the foundation of Christian values and belief</p>
        </div>
        <p className='mr-auto text-white'>© 2023 SINC Partners Ltd. All rights reserved</p>
        <span className='flex mr-auto underline'>
          <p className='cursor-pointer text-white'>Privacy Policy</p>
          <p className='cursor-pointer text-white mx-4'>Terms of Service</p>
          <p className='cursor-pointer text-white'>Security</p>
        </span>

        <span className='ml-auto'>
        <i className="fa fa-facebook-official text-white text-xl" aria-hidden="true"></i>
        <i className="fa fa-instagram text-white text-xl mx-2" aria-hidden="true"></i>
        <i className="fa fa-twitter-square text-white text-xl mx-2" aria-hidden="true"></i>
        <i className="fa fa-linkedin-square text-white text-xl mx-2" aria-hidden="true"></i>
        <i className="fa fa-youtube-play text-white text-xl" aria-hidden="true"></i>

        </span>

        <p className='block w-full text-center pb-4'>Web In Nigeria</p>
       
        
      </section>
    </footer>
  )
}

export default Footer