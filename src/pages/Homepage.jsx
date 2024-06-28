import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Slider from "react-slick";
import Button from '../components/Button';
import NavigLink from '../components/NavigLink';
import triangle from '/src/assets/shapes/Polygon 3.png'


const Homepage = () => {

  const [windowSize, setWIndowSize] = useState(window.innerWidth)

  useEffect(()=> {  
    const handleScreenResize= ()=> { //the lengths I go to get responsive layouts ehh! shoutout to ksforgeeks.org though for this idea
      setWIndowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleScreenResize)
    return ()=> {
      window.removeEventListener('resize', handleScreenResize)
    }
  }, [])

  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    waitForAnimate: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  const heroSectionData = [
    {
      id: 1,
      header: "SINC Partners is a service incubation company",
      text: "Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).",
      CTA:  "SINC With Us",
      image_path: '/src/assets/images/image.png',
      additional: []  
    },
    {
      id: 2,
      header: "We are big on these 3 things;",
      text: `✓ Service Incubation & Ecosystem Advocacy \n ✓ Building SAAS & Marketing Tech Platforms \n ✓ Institutional Innovations`,
      CTA:  "SINC With Us",
      image_path: '/src/assets/images/Frame 49221.png',
      additional: []  
    },
    {
      id: 3,
      header: "Come with an idea, leave with a company.",
      text: "You, alongside seasoned service partners and investors, expedite the growth and market entry of your startup.",
      CTA:  "SINC With Us",
      image_path: [
        {id: 1, path: "/src/assets/images/Rectangle1.png", config:"absolute top-0 -left-[20%]"},
         {id: 2, path:"/src/assets/images/Rectangle2.png", config:"absolute w-3/5 max-w-[350px] right-4"},
          {id: 3, path:"/src/assets/images/Rectangle3.png", config:"w-4/12 absolute bottom-[2%] left-[5%]"},
           {id: 4, path:"/src/assets/images/Rectangle 4.png", config:"w-4/12 absolute bottom-[2%] -right-[5%]"}],
      additional: []  
    },
  ]

  const areasOfFocusData = [
    {
      id: 0,
      number: '01',
      spec: 'Business Support & Incubation',
      color: 'bg-[#303030]'
    },
    {
      id: 1,
      number: '02',
      spec: 'On-Demand & As-A-Service',
      color: "bg-[#F47733]"
    },
    {
      id: 2,
      number: '03',
      spec: 'Marketplace & Crowdsourcing',
      color: "bg-[#ff78bf]"
    },
    {
      id: 3,
      number: '04',
      spec: 'Aggregation & Shared Economy',
      color: "bg-[#20888f]"
    },
    {
      id: 4,
      number: '05',
      spec: 'Decentralized Economy & Digital Assets',
      color: 'bg-[#ff88c6]'
    }
  ]

  const companyLogos = [
    {
      id: 1,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/1.png' 
    },
    {
      id: 2,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/2.png' 
    },
    {
      id: 3,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/3.png' 
    },
    {
      id: 4,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/4.png' 
    },
    {
      id: 5,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/5.png' 
    },
    {
      id: 6,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/6.png' 
    },
    {
      id: 7,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/7.png' 
    },
    {
      id: 8,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/8.png' 
    },
    {
      id: 9,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/9.png' 
    },
    {
      id: 10,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/10.png' 
    },
    {
      id: 11,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/11.png' 
    },
    {
      id: 12,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/12.png' 
    },
    {
      id: 13,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/13.png' 
    },
    {
      id: 14,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/14.png' 
    },
    {
      id: 15,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/15.png' 
    },
    {
      id: 16,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/16.png' 
    },
    {
      id: 17,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/17.png' 
    },
    {
      id: 18,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/18.png' 
    },
    {
      id: 19,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/19.png' 
    },
    {
      id: 20,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/20.png' 
    },
    {
      id: 21,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/21.png' 
    },
    {
      id: 22,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/22.png' 
    },
    {
      id: 23,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/23.png' 
    },
    {
      id: 24,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/24.png' 
    },
    {
      id: 25,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/25.png' 
    },
    {
      id: 26,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/26.png' 
    },
    {
      id: 27,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/27.png' 
    },
    {
      id: 28,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/28.png' 
    },
    {
      id: 29,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/29.png' 
    },
    {
      id: 30,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/30.png' 
    },
    {
      id: 31,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/31.png' 
    },
    {
      id: 32,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/32.png' 
    },
    {
      id: 33,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/33.png' 
    },
    {
      id: 34,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/34.png' 
    },
    {
      id: 35,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/35.png' 
    },
    {
      id: 36,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/36.png' 
    },
    {
      id: 37,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/37.png' 
    },
    {
      id: 38,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/38.png' 
    },
    {
      id: 39,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/39.png' 
    },
    {
      id: 40,
      logo_name: '',
      logo_path: '/src/assets/logos/other logos/40.png' 
    },
  ]

  return (
    <>
     <Navbar/>
     <section className='w-screen bg-[#ffffff63] md:bg-transparent h-screen max-h-[640px] md:max-h-screen'>
        <Slider {...settings}>
          {heroSectionData.map((slide)=>
             <div key={slide.id} className='h-[94vh] max-h-[600px] md:max-h-[94vh] pt-0 md:pt-20 w-screen flex flex-row items-start md:items-center justify-center'>
                <div className='w-screen h-full max-h-[600px] md:max-h-screen flex flex-row items-center justify-center'>
                    <section className={`h-full pt-4 md:pt-0 max-h-[600px] bg-white flex flex-col items-center md:items-start md:max-h-screen justify-center ${windowSize < 930? 'w-full': 'w-1/2'}`}>
                      <h1 className='text-3xl ml-0 md:ml-[15%] w-4/5 min-w-64 font-semibold text-[#303030]'>{slide.header}</h1>
                      <p className='text-2xl  ml-0 md:ml-[15%] w-4/5 min-w-64 font-normal whitespace-pre-line text-[#303030]  my-3'>{slide.text}</p>
                    <Button buttonText={slide.CTA} buttonStyle={'bg-[#303030] mt-3 ml-[0] md:ml-[15%] text-white'}/>
                    </section>

                    {
                    slide.id === 3 ?
                    <section className={`h-full bg-[#212121] w-1/2 flex items-center justify-center relative ${windowSize < 930? 'hidden': ''}`}>
                      {slide.image_path.map((img)=> <img key={img.id} src={img.path} className={img.config} alt=''/>)}
                    </section> 
                    :
                    <section className={`h-full w-1/2 flex items-center justify-center relative ${windowSize < 930? 'hidden': ''}`}>
                      <img src={slide.image_path} alt='' className={`object-cover h-full`}/>
                    </section>
                    }
                </div> 
              </div>
            )}

        </Slider>      
     </section>
      {/* Hero Section */}
     <section className='w-screen max-w-[1180px] flex flex-col items-center mx-auto md:pt-8'>
      <div className='pt-8 md:pt-0 w-full bg-[#ffffff63] md:bg-transparent flex justify-center'>
        <div className='bg-white py-6 px-6 md:px-12 rounded-3xl w-4/5 md:w-[70%] text-center'>
            <p className='mb-6 text-lg font-medium'>"Nigeria and Africa has a massive network effect that have not be fully utilized. With Nigerians/Africans in every country and territory of the world, we can scale an African business to 100+ countries in few weeks"
            </p>
            <p>
            <span className='font-bold'>Daniel Izeghs Oratokhai</span> <br/> Managing Partner at SINC Partners Ltd
            </p>
        </div>
      </div>
        

        <section className='w-full hidden md:flex flex-col items-center justify-center mt-20'>
          <h1 className='w-4/5 md:max-w-3/5 text-4xl font-semibold text-center mb-12'>Network of builders helping startup scale</h1>
          <div className='flex flex-row items-stretch justify-center flex-wrap w-full p-0'>
            <span className='flex flex-col w-4/5 mb-4 md:mr-4 p-6 bg-white rounded-lg md:w-[38%]'>
              <h2 className='text-xl font-bold mb-6'>Work with Service Incubators to expedite your time-to-market</h2>
              <p>Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.</p>
              <p className='font-semibold mt-4 mb-4'>For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.</p>
              <NavigLink linkName={`Learn more`} linkStyle={`mt-auto`}/>
            </span>

            <span className='flex flex-col w-4/5 mb-4 md:ml-4 p-6 bg-white rounded-lg md:w-[38%]'>
              <h2 className='text-xl font-bold mb-6'>Access funding after your mvp is validated</h2>
              <p>Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.</p>
              <p className='font-semibold mt-4 mb-2'>Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months.</p>
              <NavigLink linkName={`Learn more`} linkStyle={`mt-auto`}/>
            </span>
            
            <span>

            </span>
          </div>
        </section>
        <section className='md:hidden w-full bg-[#ffffff63] flex flex-col items-center justify-center pt-20'>
          <h1 className='w-4/5 md:max-w-3/5 text-4xl font-semibold text-center mb-2'>Building the future together, democratizing success.</h1>
          <div className='flex flex-row items-stretch justify-center flex-wrap w-full p-0'>
            <span className='flex flex-col items-center w-4/5 mb-4 md:mr-4 p-6 rounded-lg md:w-[38%]'>
              
              <p className='mb-6 text-center'>SINC Partners has a novel vision of making success available to everyone and democratizing the pain point of success. We are a next generation startup studio focus on building and supporting enterprises at scale and we help them raise service investments and funds across 3-5 deals from as low as $25k at start to up to $15m before you leave the lab.
              We are a Gasus Business, a business built on the foundation of Christian values and belief.</p>
              
              <Button buttonText={'Read About Us'} buttonStyle={'bg-[#303030] mt-auto px-2 lg:w-1/2 text-white'}/>
            </span>
           
            <span>

            </span>
          </div>
        </section>

        <section className='flex flex-col items-center w-full my-20 px-8 md:px-0'>
          <div className='flex flex-col items-center text-center'>
            <h1 className='text-4xl font-semibold mb-8'>Our Area of Focus</h1>
            <p className='w-full md:w-3/5'>In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab.</p>
          </div>

          <div className='w-full mt-12 flex items-center flex-wrap'>
            {areasOfFocusData.map((area)=>
                <span key={area.id} className={`p-2 w-full h-32 md:w-1/5 flex text-white font-medium flex-col ${area.color}`}>
                  <p>{area.number}</p>
                  <p className='mt-auto w-full md:w-3/5'>{area.spec}</p>
                </span>
            )}
          
          </div>
          
        </section>

        <section className='flex flex-col items-center w-full my-4 px-8 md:px-0'>
        <div className='flex flex-col items-center text-center'>
            <h1 className='text-4xl font-semibold mb-8'>Our Concept Innovations</h1>
            <p className='w-full md:w-3/5'>We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;</p>
          </div>

          <div className='flex items-stretch flex-wrap justify-between mt-12'>
            <span className='flex flex-col w-full mb-4 md:ml-4 p-6 bg-white rounded-lg md:w-[30%]'>
              <h2 className='text-xl font-bold mb-8'>Service Incubator</h2>
              <p>A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP
              </p>
            </span>
            <span className='flex flex-col w-full mb-4 md:ml-4 p-6 bg-white rounded-lg md:w-[30%]'>
              <h2 className='text-xl font-bold mb-8'>Virtualting</h2>
              <p>A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource
              </p>
            </span>
            <span className='flex flex-col w-full mb-4 md:ml-4 p-6 bg-white rounded-lg md:w-[30%]'>
              <h2 className='text-xl font-bold mb-8'>Diiming</h2>
              <p>A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice
              </p>
            </span>
          </div>
        </section>

        <section className='flex flex-col items-start w-full my-20 px-8 md:px-0'>
          <div className='flex flex-col items-center text-center mx-auto'>
            <h1 className='text-4xl font-semibold mb-8'>Our Service Incubation Model</h1>
            <p className='w-full md:w-4/5'>The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest.</p>
          </div>

          <div className='flex flex-col items-center md:items-start text-center md:text-left mt-8'>
            <h1 className='text-2xl font-semibold mb-2'>Hypothesis</h1>
            <p className='w-full'>Just a few reasons we know its time for this model within the ecosystem</p>
          </div>

          <div className='flex items-stretch flex-wrap justify-between mt-12'>
            <span className='flex flex-col w-full mb-4 md:ml-4 p-6 bg-white rounded-lg md:w-[30%]'>
              <span className='mb-4'>
                <img src={triangle} alt="triangle"/>
              </span>
              <p>A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP
              </p>
            </span>
            <span className='flex flex-col w-full mb-4 md:ml-4 p-6 bg-white rounded-lg md:w-[30%]'>
              <span className='mb-4'>
                <img src="/src/assets/shapes/Polygon 3 (2).png" alt="diamond"/>
              </span>
              <p>If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment
              </p>
            </span>
            <span className='flex flex-col w-full mb-4 md:ml-4 p-6 bg-white rounded-lg md:w-[30%]'>
              <span className='mb-4'>
                <img src="/src/assets/shapes/Polygon 3 (3).png" alt="pentagon"/>
              </span>
              <p>Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return
              </p>
            </span>
            
          </div>

          <div className='flex flex-col items-center md:items-start text-center md:text-left mt-8'>  
            <h1 className='text-2xl font-semibold mb-2'>Case Study</h1>
            <p className='w-full'>See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time</p>
          </div>
          <div className='flex items-start flex-wrap justify-between mt-12'>
            <Button buttonText={'Service Incubator Equity'} buttonStyle={'bg-white text-black border-[1px] border-[#303030] mr-0 md:mr-2 mt-4 md:mt-0'}/>
            <Button buttonText={'SEEQ Maths Equation'} buttonStyle={'bg-white text-black border-[1px] border-[#303030] mr-0 md:mr-2 mt-4 md:mt-0'}/>
            <Button buttonText={'Value of my Equity Over Time'} buttonStyle={'bg-white text-black border-[1px] border-[#303030] mr-0 md:mr-2 mt-4 md:mt-0'}/>
          </div>

          <NavigLink linkName={'Become A Service Incubator'} linkStyle={'mt-12 mx-auto'}/>

        </section>

        <section className='w-full my-4'>
          <div className='flex flex-col items-center text-center mx-auto'>
              <h1 className='text-4xl font-semibold mb-8'>Our Studio Portfolio</h1>
              <p className='w-full md:w-4/5'>Our 2024 Service Incubator Portfolio Companies</p>
          </div>

          <div className='w-full flex flex-wrap justify-center mt-12 gap-2 lg:gap-5'>
            {companyLogos.map((logo)=> 
              <span className='md:w-[124px] md:h-[60px] w-[78px] h-[40px] flex items-center justify-center bg-white rounded-md cursor-pointer'>
                <img key={logo.id}  src={logo.logo_path} alt='' className='w-1/2'/>
              </span>
            )}
           
          </div>
        </section>
     </section>
    

    </>
  )
}

export default Homepage